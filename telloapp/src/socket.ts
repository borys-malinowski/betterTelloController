import getSocketConnection from "./getSocketConnection";
import { createState } from "@hookstate/core";
export const clearSocket = getSocketConnection();
const socket = createState(clearSocket);
export default socket;
