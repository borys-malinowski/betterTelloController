import { Message } from 'discord.js';
import socketSend from "../fly"

const getStart = async (message: Message<boolean>) => {
    socketSend("command"); 
    message.channel.send(`command`) ;
}
   
export default getStart;