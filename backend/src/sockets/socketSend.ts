import errorHandler from "../errorHandler";
import { HOST, PORT } from "../constants";
import telloSocket from "./telloSocket";

const socketSend = (command:string) => {
    telloSocket.send(command, 0, command.length, PORT, HOST, errorHandler);
  }
  export default socketSend;
