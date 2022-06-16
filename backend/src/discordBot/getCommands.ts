import { Message } from "discord.js";
import socketSend from "../sockets/socketSend";
import formatMessageContent from "./formatMessageContent";

const getCommands = async (message: Message<boolean>) => {
  const [_, command] = formatMessageContent(message.content);
  await socketSend(command);
  message.channel.send(`${command}`);
};

export default getCommands;
