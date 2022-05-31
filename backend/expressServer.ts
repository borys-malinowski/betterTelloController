import express, { Express } from "express";
import { Server as HTTPServer } from "http";
import { Server } from "socket.io";

const app: Express = express();

const server: HTTPServer = app.listen(6767, (): void => {
  console.log("socket io server ip and running");
});

const io: Server = new Server(server);

export default io;