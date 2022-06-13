import io from "./server/expressServer";

const sendMessage = (message: Buffer) => {
    const messages = message.toString();
    io.emit("droneMessage", messages);
  }
  export default sendMessage;