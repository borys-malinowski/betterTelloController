import { createSocket, Socket, SocketType } from "dgram";

const createTelloSocket = (
  port: number,
  host?: string,
  protocol: SocketType = "udp4",
) => {
  const socket: Socket = createSocket(protocol);
  socket.bind(port, host);
  return socket;
};

export default createTelloSocket;
