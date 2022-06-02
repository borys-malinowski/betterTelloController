import { useEffect, useState } from "react";
import { clearSocket } from "../socket";
import { DroneStateType } from "../../../backend/src/types/droneStateType";

function useDroneState() {
  const [telloState, setTelloState] = useState<DroneStateType | null>(null);
  useEffect(() => {
    clearSocket.on("dronestate", (data) => setTelloState(data));
  }, []);

  return telloState;
}

const DroneState = () => {
  const droneState = useDroneState();
  return (
    <div>
      <p>
        <>Drone State: {droneState?.yaw}</>
      </p>
    </div>
  );
};

export default DroneState;
