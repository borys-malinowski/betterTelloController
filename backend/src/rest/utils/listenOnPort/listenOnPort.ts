import { Express } from "express";
import { Server } from "http";

const listenOnPort = (
  instance: Express,
  port: number,
  callback?: () => void,
): Server => {
  return instance.listen(port, callback);
};

export default listenOnPort;