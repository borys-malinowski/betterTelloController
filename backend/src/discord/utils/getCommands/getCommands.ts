import { Message } from "discord.js";
import socket from "~tello";
import sendMessage from "~tello/utils/sendMessage/sendMessage";
import { telloHost } from "~tello/constants/hosts";
import { socketPort } from "~tello/constants/ports";
import formatMessageContent from "~discord/utils/formatMessageContent/formatMessageContent";
import errorHandler from "~webSocket/errorHandler";

const getCommands = (message: Message<boolean>) => {
  const [_, command] = formatMessageContent(message.content);
  sendMessage(socket, command, {
    port: socketPort,
    host: telloHost,
    errorHandler,
  });
  message.channel.send(`${command}`);
};

export default getCommands;
