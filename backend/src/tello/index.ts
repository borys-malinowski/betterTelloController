import {
  streamPort,
  statePort,
  defaultHost,
  socketPort,
  socketHost,
} from "../constants";
import createTelloSocket from "./utils/createTelloSocket/createTelloSocket";

export const socket = createTelloSocket(socketPort, socketHost);

export const stream = createTelloSocket(streamPort, defaultHost);

export const state = createTelloSocket(statePort, defaultHost);

export default socket;
