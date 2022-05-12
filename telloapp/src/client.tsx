import socket from "./socket";
import { useState } from "@hookstate/core";

function useSocket() {
  const socketState = useState(socket);
  const statusState = useState("DISCONNECTED");
  socketState.get().on("status", (message: string) => {
    console.log(`MESSAGE FROM SOCKET${message}`);
    statusState.set(message);
  });
  return statusState;
}

const DroneState = () => {
  const status = useSocket();
  return (
    <div>
      <p>Status: {status.get()}</p> I am, the drone status
    </div>
  );
};

export default DroneState;
