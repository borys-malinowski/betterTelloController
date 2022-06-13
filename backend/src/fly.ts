import { Socket } from "socket.io";
import DroneStateType from "src/types/droneStateType";
import errorHandler from "./errorHandler";
import telloSocket from "./sockets/telloSocket";
import telloState from "./sockets/telloState";
import io from "./server/expressServer";
import ParsedState from "./types/typeParsedState";
import ParsedStateAsTuple from "./types/typeParsedStateAsTuple";
import { HOST, PORT } from "./constants";
import telloStream from "./sockets/telloStream";
import {Client, Message} from 'discord.js';
import formatMessageContent from "./discordBot/formatMessageContent";
import getCommands from "./discordBot/getCommands";
import {PREFIX} from "./discordBot/formatMessageContent"
import { config } from "dotenv";
import Options from "./discordBot/typeOptions";
import sendMessage from "./sendMessage";


const socketSend = (command:string) => {
  telloSocket.send(command, 0, command.length, PORT, HOST, errorHandler);
}
export default socketSend;



config()
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const getCommandMapper = async (message: Message<boolean>) => {
    const [cmdName] = formatMessageContent(message.content)
    const options: Options= {
        drone: async () => {
            await getCommands(message);
        },
    }
    await options[options.hasOwnProperty(cmdName) ? cmdName : "default"](message)
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


io.on("connection", (socket: Socket): void => {
  telloSocket.on("error", ({ message }: Error): void => {
    console.error(`server error:\n${message}`);
    telloSocket.close();
  });

  telloStream.on("stream", (video): void => {
    io.emit("droneStream", video);
  });

  telloSocket.on("message", (message: Buffer): void => {
    sendMessage(message)
  });

  telloState.on("error", ({ message }: Error): void => {
    console.error(`server error:\n${message}`);
    telloSocket.close();
  });
  telloState.on("message", (state: Buffer): void => {
    const parseState: string = state.toString();
    const parsedState: ParsedState[] = parseState
      .split(";")
      .map((x): ParsedState => {
        const [key, value]: ParsedStateAsTuple = x.split(
          ":",
        ) as ParsedStateAsTuple;
        return { [key]: value } as ParsedState;
      });
    const fixedParsedState: DroneStateType = Object.assign({}, ...parsedState);
    io.emit("dronestate", fixedParsedState);
  });
  socket.on("command", (command: string): void => {
    try {
      socketSend(command);
    } catch (error) {
      console.error(error);
    }
  });
});

