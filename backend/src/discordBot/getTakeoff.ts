import { Message } from 'discord.js';
import { clearSocket } from "../../../telloapp/src/socket";

const getTakeoff = async (message: Message<boolean>) => {
    clearSocket.emit("command", "takeoff");
        message.channel.send(`takeoff`) ;
    }
   
export default getTakeoff;