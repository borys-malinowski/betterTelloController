import DroneStateType from "types/droneStateType"

type ParsedState = { [key in keyof DroneStateType]: DroneStateType };

export default ParsedState;