import { useEffect, useState } from "react";
import {clearSocket} from '../socket'

function useDroneState() {
    const [telloState, setTelloState] = useState<DroneStateType | null>(null);
    useEffect(() => {
        console.log('working...')
        clearSocket.on('dronestate', (data) => setTelloState((data)));
    }, []);

    return telloState
};

type DroneStateType = {
    pitch: number,
    roll: number,
    yaw: number,
    vgx: number,
    vgy: number,
    vgz: number,
    templ: number,
    temph: number,
    tof: number,
    h: number,
    bat: number,
    baro: number,
    time: number,
    agx: number,
    agy: number,
    agz: number,
}

const DroneState =() => {
    const droneState = useDroneState();
    return (
        <div>
            <p><>Drone State: {droneState?.agz}</></p>
        </div>
    )
}

export default DroneState;


