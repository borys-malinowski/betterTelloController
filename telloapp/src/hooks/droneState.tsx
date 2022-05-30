import { useEffect, useState } from "react";
import {clearSocket} from '../socket'
import {DroneStateType} from "../../../backend/fly"

function useDroneState() {
    const [telloState, setTelloState] = useState<DroneStateType | null>(null);
    useEffect(() => {
        console.log('working...')
        clearSocket.on('dronestate', (data) => setTelloState((data)));
    }, []);

    return telloState
};

const DroneState =() => {
    const droneState = useDroneState();
    return (
        <div>
            <p><>Drone State: {droneState?.agz}</></p>
        </div>
    )
}

export default DroneState;


