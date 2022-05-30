import dgram, { Socket as DgramSocket } from "dgram";
import express, { Express } from "express";
import { Server as HTTPServer } from "http";
import { Server, Socket } from "socket.io";
import DroneStateType from "DroneStateType"
import errorHandler from "errorHandler"


type ParsedState = { [key in keyof DroneStateType]: DroneStateType };
type ParsedStateAsTuple = [keyof DroneStateType, DroneStateType];

const PORT: number = 8889;
const STATEPORT: number = 8890;
const HOST: string = "192.168.10.1";
const HOSTPORT: string = "0.0.0.0";

const telloSocket: DgramSocket = dgram.createSocket("udp4");
telloSocket.bind(PORT);

const telloState: DgramSocket = dgram.createSocket("udp4");
telloState.bind(STATEPORT, HOSTPORT);

const app: Express = express();

const server: HTTPServer = app.listen(6767, (): void => {
  console.log("socket io server ip and running");
});

const io: Server = new Server(server);

io.on("connection", (socket: Socket): void => {
  telloSocket.on("error", ({ message }: Error): void => {
    console.error(`server error:\n${message}`);
    telloSocket.close();
  });

  telloSocket.on("message", (message: Buffer): void => {
    console.log(`drone tell: ${message}`);
  });

  telloState.on("error", ({ message }: Error): void => {
    console.log(`server error:\n${message}`);
    telloSocket.close();
  });
  telloState.on("message", (state: Buffer): void => {
    const parseState: string = state.toString();
    const parsedState: ParsedState[] = parseState
      .split(";")
      .map((x): ParsedState => {
        const [key, value]: ParsedStateAsTuple = x.split(
          ":",
        ) as ParsedStateAsTuple;
        return { [key]: value } as ParsedState;
      });
    const fixedParsedState: DroneStateType = Object.assign({}, ...parsedState);
    console.log(`drone position: ${fixedParsedState}`);
    io.emit("dronestate", fixedParsedState);
  });
  socket.on("command", (command: string): void => {
    console.log(`Command sent from browser ${command.length}, ${command}`);
    try {
      telloSocket.send(command, 0, command.length, PORT, HOST, errorHandler);
    } catch (error) {
      console.error(error);
    }
  });
});
