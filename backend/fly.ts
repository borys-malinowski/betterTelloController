import dgram from "dgram";
import express from 'express';
//import wait from "waait";
// import commandDelays from "./commandDelays";
import  { Server } from "socket.io";


const PORT = 8889;
const HOST = "192.168.10.1";

const tello = dgram.createSocket("udp4");
tello.bind(PORT);

tello.on("message", (message) => {
  console.log(`drone tell: ${message}`);
});

function errorHandler(error: Error | null) {
  if (error) {
    console.log("ERROR");
    console.log(error);
  }
}

//const commands = ["command", "battery?", "takeoff", "land"];

//let i = 0;
//tello.send("command", 0, "command".length, PORT, HOST, errorHandler);

// async function go() {
//   const command = commands[i];
//   const delay = commandDelays[command];
//   console.log(`running command: ${command}`);
//   tello.send(command, 0, command.length, PORT, HOST, errorHandler);
//   await wait(delay);
//   i += 1;
//   if (i < commands.length) {
//     return go();
//   }
//   console.log("done!");
// }

// go();

const app = express();

const server = app.listen(6767, () => {
  console.log('socket io server ip and running');
})

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('command', command => {
    console.log('Command sent from browser');
    console.log(command);
    tello.send(command, 0, command.length, PORT, HOST, errorHandler);
  })
  socket.emit('status', 'CONNECTED');
});
