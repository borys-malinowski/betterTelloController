import { Server } from "socket.io";
import createWebSocket from "./utils/createWebSocket/createWebSocket";
import eventMapperUnwraper from "../utils/eventMapperUnwraper/eventMapperUnwraper";
import ParsedState from "../types/typeParsedState";
import ParsedStateAsTuple from "../types/typeParsedStateAsTuple";
import DroneStateType from "../types/droneStateType";
import { httpServer } from "../rest/index";
import { socket, stream } from "~tello";
import sendMessage from "../tello/utils/sendMessage/sendMessage";
import { socketPort } from "~tello/constants/ports";
import { telloHost } from "~tello/constants/hosts";
import errorHandler from "./errorHandler";

const io: Server = createWebSocket(
  httpServer,
  {
    command: (payload: string): void => {
      try {
        sendMessage(socket, payload, {
          port: socketPort,
          host: telloHost,
          errorHandler,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
  (): void => {
    eventMapperUnwraper(socket, {
      error: ({ message }: Error): void => {
        console.error(`server error:\n${message}`);
        socket.close();
      },
      // message: (message: Buffer): void => {
      //   sendMessage(socket, message.toString(), {
      //     port: 8889,
      //     host: "192.168.10.2",
      //     errorHandler,
      //   });
      // },
    });
    eventMapperUnwraper(socket, {
      error: ({ message }: Error): void => {
        console.error(`server error:\n${message}`);
        socket.close();
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
    eventMapperUnwraper(stream, {
      stream: (video: Buffer): void => {
        io.emit("droneStream", video);
      },
    });
  },
);
export default io;
