import { Message } from 'discord.js';
import { clearSocket } from "../../../telloapp/src/socket";

const getStart = async (message: Message<boolean>) => {
    clearSocket.emit("command", "command");
        message.channel.send(`command`) ;
    }
   
export default getStart;