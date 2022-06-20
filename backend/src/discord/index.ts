import { Message } from "discord.js";
import { prefix } from "~discord/constants/constants";

import createClient from "./utils/createClient/createClient";
import getCommandMapper from "./utils/getCommandMapper/getCommandMapper";

const client = createClient(process.env.DISCORD_BOT_TOKEN || "", {
  messageCreate: async (message: Message<boolean>) => {
    if (message.author.bot) {
      return;
    }
    if (message.content.startsWith(prefix)) {
      await getCommandMapper(message);
    }
  },
});

export default client;
