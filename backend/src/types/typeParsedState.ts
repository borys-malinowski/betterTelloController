import DroneStateType from "src/types/droneStateType"

type ParsedState = { [key in keyof DroneStateType]: DroneStateType };

export default ParsedState;