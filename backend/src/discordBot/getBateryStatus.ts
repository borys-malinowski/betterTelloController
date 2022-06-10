import { Message } from 'discord.js';
import socketSend from "../fly"

const getBateryStatus = async (message: Message<boolean>) => {
    socketSend("batery?");
    message.channel.send(`batery`) ;
}
   
export default getBateryStatus;