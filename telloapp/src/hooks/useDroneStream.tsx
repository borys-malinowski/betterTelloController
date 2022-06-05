import { useEffect, useState } from "react";
import { clearSocket } from "../socket";


function useDroneStream() {
  const [telloStream, setTelloStream] = useState<null>(null);
  useEffect(() => {
    clearSocket.on("droneStream", (video) => setTelloStream(video));
  }, []);

  return telloStream;
}

const DroneStream = () => {
  const droneStream = useDroneStream();
  return (
    <div>
      <p>
        <>Drone Stream: {droneStream}</>
      </p>
    </div>
  );
};

export default DroneStream;