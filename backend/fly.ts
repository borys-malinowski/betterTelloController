import { Socket } from "socket.io";
import DroneStateType from "DroneStateType";
import errorHandler from "./errorHandler";
import telloSocket from "./telloSocket";
import telloState from "./telloState";
import io from "./expressServer";
import ParsedState from "./typeParsedState";
import ParsedStateAsTuple from "./typeParsedStateAsTuple";
import { HOST, PORT } from "./constants";

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
