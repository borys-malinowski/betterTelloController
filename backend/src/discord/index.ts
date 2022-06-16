import { Message } from "discord.js";
import { PREFIX } from "../discordBot/formatMessageContent";
import createClient from "./utils/createClient/createClient";
import getCommandMapper from "./utils/getCommandMapper/getCommandMapper";

const client = createClient(process.env.DISCORD_BOT_TOKEN || "", {
  messageCreate: async (message: Message<boolean>) => {
    if (message.author.bot) {
      return;
    }
    if (message.content.startsWith(PREFIX)) {
      await getCommandMapper(message);
    }
  },
});

export default client;
