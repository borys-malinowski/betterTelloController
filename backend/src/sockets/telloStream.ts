import dgram, { Socket } from "dgram";
import { HOSTPORT, STREAMPORT } from "../constants";

const telloStream: Socket =dgram.createSocket("udp4");
telloStream.bind(STREAMPORT, HOSTPORT)

export default telloStream;