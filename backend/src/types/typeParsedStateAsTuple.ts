import DroneStateType from "src/types/droneStateType"

type ParsedStateAsTuple = [keyof DroneStateType, DroneStateType];

export default ParsedStateAsTuple;
