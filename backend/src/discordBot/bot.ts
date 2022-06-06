import {Client, Message} from 'discord.js';
import formatMessageContent from "./formatMessageContent";
import getTakeoff from "./getTakeoff";
import {PREFIX} from "./formatMessageContent"
import { config } from "dotenv";
import Options from "./typeOptions";

config()
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const getCommandMapper = async (message: Message<boolean>) => {
    const [cmdName] = formatMessageContent(message.content)
    const options: Options= {
        takeoff: async () => {
            await getTakeoff(message);
        }
    }
    await options[options.hasOwnProperty(cmdName) ? cmdName : "default"]()
};

client.on("messageCreate", async (message) => {
    if (message.author.bot === true) {
      return;
    }
    if (message.content.startsWith(PREFIX)) {
      await getCommandMapper(message);
    }
  });
  
  client.login(process.env.DISCORD_BOT_TOKEN);