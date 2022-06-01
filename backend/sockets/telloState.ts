import dgram, { Socket as DgramSocket } from "dgram";
import { STATEPORT, HOSTPORT } from "../constants";

const telloState: DgramSocket = dgram.createSocket("udp4");
telloState.bind(STATEPORT, HOSTPORT);

export default telloState;
