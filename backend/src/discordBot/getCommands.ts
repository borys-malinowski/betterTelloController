import { Message } from "discord.js";
import formatMessageContent from "./formatMessageContent";
import socket from "../tello";
import sendMessage from "../tello/utils/sendMessage/sendMessage";
import { socketPort, socketHost } from "../constants";
import errorHandler from "../errorHandler";

const getCommands = (message: Message<boolean>) => {
  const [_, command] = formatMessageContent(message.content);
  sendMessage(socket, command, {
    port: socketPort,
    host: socketHost,
    errorHandler,
  });
  message.channel.send(`${command}`);
};

export default getCommands;
