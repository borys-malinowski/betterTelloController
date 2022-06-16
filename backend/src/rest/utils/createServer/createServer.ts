import express, { Express } from "express";
import { Server } from "http";
import applyMiddlewares from "../applyMiddlewares/applyMiddlewares";
import listenOnPort from "../listenOnPort/listenOnPort";

const createServer = (
  port: number,
): { server: Express; httpServer: Server } => {
  const server: Express = express();
  applyMiddlewares(server);
  const httpServer = listenOnPort(server, port);
  return { server, httpServer };
};
export default createServer;
