import { Server } from "socket.io";

const sendMessage = (instance: Server, event: string, message: Buffer) => {
  instance.emit(event, message);
};

export default sendMessage;
