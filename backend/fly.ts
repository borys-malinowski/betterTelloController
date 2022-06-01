import { Socket } from "socket.io";
import DroneStateType from "types/droneStateType";
import errorHandler from "./errorHandler";
import telloSocket from "./sockets/telloSocket";
import telloState from "./sockets/telloState";
import io from "./server/expressServer";
import ParsedState from "./types/typeParsedState";
import ParsedStateAsTuple from "./types/typeParsedStateAsTuple";
import { HOST, PORT } from "./constants";

io.on("connection", (socket: Socket): void => {
  telloSocket.on("error", ({ message }: Error): void => {
    console.error(`server error:\n${message}`);
    telloSocket.close();
  });

  telloSocket.on("message", (message: Buffer): void => {
    const messages = message.toString()
    io.emit('droneMessage', messages)
  });

  telloState.on("error", ({ message }: Error): void => {
    console.error(`server error:\n${message}`);
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
    io.emit("dronestate", fixedParsedState);
  });
  socket.on("command", (command: string): void => {
    try {
      telloSocket.send(command, 0, command.length, PORT, HOST, errorHandler);
    } catch (error) {
      console.error(error);
    }
  });
});
