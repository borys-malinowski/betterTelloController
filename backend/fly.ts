import dgram from "dgram";
import express from 'express';
import  { Server } from "socket.io";

const PORT = 8889;
const STATEPORT = 8890;
const HOST = "192.168.10.1";
const HOSTPORT = "0.0.0.0";

const tello = dgram.createSocket("udp4");
tello.bind(PORT);

const telloState = dgram.createSocket("udp4");
telloState.bind(STATEPORT, HOSTPORT);

tello.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  tello.close();
});

telloState.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  tello.close();
});

tello.on("message", (message) => {
  console.log(`drone tell: ${message}`);
});

telloState.on("message", state  => {
  console.log(`drone position: ${state}`);
});

function errorHandler(error: Error | null) {
  if (error) {
    console.log("ERROR");
    console.log(error);
  }
};

const app = express();

const server = app.listen(6767, () => {
  console.log('socket io server ip and running');
});

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('command', (command) => {
    console.log(`Command sent from browser ${command.length}, ${command}`);
    try {
      tello.send(command, 0, command.length, PORT, HOST, errorHandler);
    } catch ( error ) {
      console.error(error)
    }
  })
  socket.emit('status', 'CONNECTED');
});
