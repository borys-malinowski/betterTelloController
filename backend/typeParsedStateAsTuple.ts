import DroneStateType from "DroneStateType"

type ParsedStateAsTuple = [keyof DroneStateType, DroneStateType];

export default ParsedStateAsTuple;