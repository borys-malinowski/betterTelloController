import dgram, { Socket as DgramSocket } from "dgram";

import { PORT } from "./constants";

const telloSocket: DgramSocket = dgram.createSocket("udp4");
telloSocket.bind(PORT);

export default telloSocket;
