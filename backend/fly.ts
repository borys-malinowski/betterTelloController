import dgram from "dgram";
import express from "express";
import { Server } from "socket.io";

const PORT = 8889;
const STATEPORT = 8890;
const HOST = "192.168.10.1";
const HOSTPORT = "0.0.0.0";

function errorHandler(error: Error | null) {
  if (error) {
    console.log("ERROR");
    console.log(error);
  }
}

const tello = dgram.createSocket("udp4");
tello.bind(PORT);

const telloState = dgram.createSocket("udp4");
telloState.bind(STATEPORT, HOSTPORT);

const app = express();

const server = app.listen(6767, () => {
  console.log("socket io server ip and running");
});

const io = new Server(server);

io.on("connection", (socket) => {
  tello.on("error", (err) => {
    console.log(`server error:\n${err.stack}`);
    tello.close();
  });

  tello.on("message", (message) => {
    console.log(`drone tell: ${message}`);
  });

  telloState.on("error", (err) => {
    console.log(`server error:\n${err.stack}`);
    tello.close();
  });
  telloState.on("message", (state) => {
    const parseState = state.toString();
    const parsedState = parseState.split(";").map((x) => {
      const [key, value] = x.split(":");
      return {[key]: value}
    });
    const fixedParsedState = Object.assign({}, ...parsedState)
    console.log(`drone position: ${fixedParsedState}`);
    io.emit("dronestate", fixedParsedState);
  });
  socket.on("command", (command) => {
    console.log(`Command sent from browser ${command.length}, ${command}`);
    try {
      tello.send(command, 0, command.length, PORT, HOST, errorHandler);
    } catch (error) {
      console.error(error);
    }
  });
});
