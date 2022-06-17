import {
  streamPort,
  statePort,
  defaultHostPort,
  socketPort,
  socketHost,
} from "../constants";
import createTelloSocket from "./utils/createTelloSocket/createTelloSocket";

export const socket = createTelloSocket(socketPort, socketHost);

export const stream = createTelloSocket(streamPort, defaultHostPort);

export const state = createTelloSocket(statePort, defaultHostPort);
