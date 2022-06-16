import { Server } from "socket.io";
import createWebSocket from "./utils/createWebSocket/createWebSocket";
import socketSend from "../sockets/socketSend";
import eventMapperUnwraper from "../utils/eventMapperUnwraper/eventMapperUnwraper";
import telloSocket from "../sockets/telloSocket";
import sendMessage from "../sockets/sendMessage";
import telloState from "../sockets/telloState";
import ParsedState from "../types/typeParsedState";
import ParsedStateAsTuple from "../types/typeParsedStateAsTuple";
import DroneStateType from "../types/droneStateType";
import telloStream from "../sockets/telloStream";
import { httpServer } from "../rest/index";

const io: Server = createWebSocket(
  httpServer,
  {
    command: (payload: string): void => {
      try {
        socketSend(payload);
      } catch (error) {
        console.error(error);
      }
    },
  },
  (): void => {
    eventMapperUnwraper(telloSocket, {
      error: ({ message }: Error): void => {
        console.error(`server error:\n${message}`);
        telloSocket.close();
      },
      message: (message: Buffer): void => {
        sendMessage(message);
      },
    });
    eventMapperUnwraper(telloState, {
      error: ({ message }: Error): void => {
        console.error(`server error:\n${message}`);
        telloSocket.close();
      },
      message: (state: Buffer): void => {
        const parseState: string = state.toString();
        const parsedState: ParsedState[] = parseState
          .split(";")
          .map((x): ParsedState => {
            const [key, value]: ParsedStateAsTuple = x.split(
              ":",
            ) as ParsedStateAsTuple;
            return { [key]: value } as ParsedState;
          });
        const fixedParsedState: DroneStateType = Object.assign(
          {},
          ...parsedState,
        );
        io.emit("dronestate", fixedParsedState);
      },
    });
    eventMapperUnwraper(telloStream, {
      stream: (video: Buffer): void => {
        io.emit("droneStream", video);
      },
    });
  },
);
export default io;
