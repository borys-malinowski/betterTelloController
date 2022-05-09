import  { clearSocket } from "./socket";

const Commands = () => {

 return (<div>
    <button onClick={() => {clearSocket.emit('command', 'battery')}}>BATTERY CHECK</button>
    <button onClick={() => {clearSocket.emit('command', 'command')}}>READY</button>
    <button onClick={() => {clearSocket.emit('command', 'takeoff')}}>TAKE OFF</button>
    <button onClick={() => {clearSocket.emit('command', 'land')}}>LAND</button>
    <button onClick={() => {clearSocket.emit('command', 'up 20')}}>UP 20</button>
    <button onClick={() => {clearSocket.emit('command', 'down 20')}}>DOWN 20</button>
    <button onClick={() => {clearSocket.emit('command', 'flip l')}}>FLIP LEFT</button>
    <button onClick={() => {clearSocket.emit('command', 'flip r')}}>FLIP RIGGHT</button>
    <button onClick={() => {clearSocket.emit('command', 'flip f')}}>FLIP FORWARD</button>
    <button onClick={() => {clearSocket.emit('command', 'flip b')}}>FLIP BACK</button>
    <button onClick={() => {clearSocket.emit('command', 'emergency')}}>EMERGENCY</button>
    
</div>)
};
export default Commands;