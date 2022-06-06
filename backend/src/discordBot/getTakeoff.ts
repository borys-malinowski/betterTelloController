import { Message } from 'discord.js';


const getTakeoff = async (message: Message<boolean>) => {
        message.channel.send(`takeoff`) ;
    }
   
export default getTakeoff;