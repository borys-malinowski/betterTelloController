import DroneStateType from "types/droneStateType"

type ParsedStateAsTuple = [keyof DroneStateType, DroneStateType];

export default ParsedStateAsTuple;
