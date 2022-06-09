import { Message } from 'discord.js';
import socketSend from "../fly"

const getTakeoff = async (message: Message<boolean>) => {
    socketSend("takeoff"); 
        message.channel.send(`takeoff`) ;
    }
   
export default getTakeoff;