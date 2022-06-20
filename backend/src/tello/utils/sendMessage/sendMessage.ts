import { Socket } from "dgram";

const sendMessage = (
  socket: Socket,
  message: string,
  {
    port,
    host,
  }: {
    port?: number;
    host?: string;
    errorHandler?: (error: Error | null) => void;
  },
) => {
  socket.send(message, 0, message.length, port, host, (error) => {
    console.log(error);
  });
  console.log(`send message: ${message}`);
};
export default sendMessage;
