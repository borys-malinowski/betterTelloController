import { Message } from 'discord.js';
import socketSend from "../fly"

const getStart = async (message: Message<boolean>) => {
    socketSend("land"); 
    message.channel.send(`land`) ;
}
   
export default getStart;