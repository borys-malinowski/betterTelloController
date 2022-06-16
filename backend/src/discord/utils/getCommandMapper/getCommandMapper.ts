import { Message } from "discord.js";
import formatMessageContent from "../../../discordBot/formatMessageContent";
import getCommands from "../../../discordBot/getCommands";
import Options from "../../../discordBot/typeOptions";

const getCommandMapper = async (message: Message<boolean>) => {
  const [cmdName] = formatMessageContent(message.content);
  const options: Options = {
    drone: async () => {
      await getCommands(message);
    },
  };
  await options[options.hasOwnProperty(cmdName) ? cmdName : "default"](message);
};

export default getCommandMapper;
