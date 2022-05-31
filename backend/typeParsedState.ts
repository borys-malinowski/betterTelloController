import DroneStateType from "DroneStateType"

type ParsedState = { [key in keyof DroneStateType]: DroneStateType };

export default ParsedState;