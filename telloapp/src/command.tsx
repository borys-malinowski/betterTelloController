import  { clearSocket } from "./socket";
//import { useState } from '@hookstate/core';

function sendCommand(comand: string) {
    console.log(`sending command! ${comand}`);
}
const Commands = () => {
 //   const socketState = useState(socket); 
    return (<div>
        <button onClick={() => {clearSocket.emit('command', 'command')}}>first</button>
        <button onClick={() => {clearSocket.emit('command', 'takeoff')}}>TAKE OFF</button>
        <button onClick={() => sendCommand('land')}>LAND</button>
        <button onClick={() => sendCommand('down 20')}>DOWN 20</button>
        <button onClick={() => sendCommand('up 20')}>UP 20</button>
        <button onClick={() => sendCommand('fllip l')}>FLIP L</button>
        <button onClick={() => sendCommand('emergency')}>EMERGENCY</button>
        <button onClick={() => sendCommand('takeoff')}>takeoff</button>
    </div>)
};
export default Commands;