import { Server } from "socket.io";

const sendMessage = (instance: Server, event: string, message: Buffer) => {
  const messages = message.toString();
  instance.emit(event, messages);
};

export default sendMessage;
