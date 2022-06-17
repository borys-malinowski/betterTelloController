import { Socket } from "dgram";

const sendMessage = (
  instance: Socket,
  message: string,
  {
    port,
    host,
    errorHandler,
  }: {
    port?: number;
    host?: string;
    errorHandler?: (error: Error | null) => void;
  },
) => {
  instance.send(message, 0, message.length, port, host, errorHandler);
};
export default sendMessage;
