import { Message } from "discord.js";
import formatMessageContent from "~discord/utils/formatMessageContent/formatMessageContent";
import getCommands from "~discord/utils/getCommands/getCommands";
import Options from "~discord/types/typeOptions";

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
