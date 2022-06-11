import { Message } from 'discord.js';
import socketSend from "../fly"
import formatMessageContent from "./formatMessageContent";

    const getTakeoff = async (message: Message<boolean>) => {
        const [_,  command] = formatMessageContent(message.content);
        //const tableAResponse = command.substring(5, 22).toLowerCase()
        const tableAResponse = command.split(' ')
        tableAResponse.shift()
        const fixedTableAResponse = tableAResponse.join(' ')
        socketSend(fixedTableAResponse); 
        message.channel.send(fixedTableAResponse) ;
    }

export default getTakeoff;