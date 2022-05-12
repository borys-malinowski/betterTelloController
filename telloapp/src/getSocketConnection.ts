import socketio from "socket.io-client";
const getSocketConnection = () => {
  const socket = socketio("ws://localhost:6767", {
    transports: ["websocket"],
  }).connect();
  return socket;
};
export default getSocketConnection;
