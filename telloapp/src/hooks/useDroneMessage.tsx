import { useEffect, useState } from "react";
import { clearSocket } from "../socket";
import { droneMessageType } from "../../../backend/src/types/droneMessageType";

function useDroneMessage() {
  const [telloMessage, setTelloMessage] = useState<droneMessageType |null>(null);
  useEffect(() => {
    clearSocket.on("droneMessage", (messages) => setTelloMessage(messages));
  }, []);

  return telloMessage;
}

const DroneMessage = () => {
  const droneMessage = useDroneMessage();
  return (
    <div>
      <p>
        <>Drone Message: {droneMessage}</>
      </p>
    </div>
  ); // osobny plik
};

export default DroneMessage;
