//import { telloHost } from "./constants/hosts";
import { socketPort, streamPort, statePort } from "./constants/ports";
import createTelloSocket from "./utils/createTelloSocket/createTelloSocket";

export const socket = createTelloSocket(socketPort);

export const stream = createTelloSocket(streamPort);

export const state = createTelloSocket(statePort);

export default socket;
