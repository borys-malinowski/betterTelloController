import { Server as HTTPServer } from "http";
import { Server, Socket } from "socket.io";
import eventMapperUnwraper from "../../../utils/eventMapperUnwraper/eventMapperUnwraper";
import EventMapper from "../../../types/EventMapper/EventMapper";

type Callback = (socket: Socket) => void;
type SocketCallback = (payload: string) => void;
interface CreateWebSocket {
  (httpServer: HTTPServer): Server;
  (httpServer: HTTPServer, eventMapper: EventMapper<SocketCallback>): Server;
  (httpServer: HTTPServer, callback: Callback): Server;
  (
    httpServer: HTTPServer,
    eventMapper: EventMapper<SocketCallback>,
    callback: Callback,
  ): Server;
}

const createWebSocket: CreateWebSocket = (
  httpServer: HTTPServer,
  eventMapperOrCallback?: EventMapper<SocketCallback> | Callback,
  callback?: Callback,
): Server => {
  const io: Server = new Server(httpServer);
  if (eventMapperOrCallback) {
    io.on("connection", (socket: Socket) => {
      if (typeof eventMapperOrCallback === "object") {
        eventMapperUnwraper(socket, eventMapperOrCallback);
      } else if (typeof eventMapperOrCallback === "function") {
        eventMapperOrCallback(socket);
      }
      if (callback) {
        callback(socket);
      }
    });
  }
  return io;
};

export default createWebSocket;
