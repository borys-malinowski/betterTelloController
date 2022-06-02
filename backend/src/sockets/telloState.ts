import dgram, { Socket } from "dgram";
import { UDPPORT, HOSTPORT } from "../constants";

const telloState: Socket = dgram.createSocket("udp4");
telloState.bind(UDPPORT, HOSTPORT);

export default telloState;
