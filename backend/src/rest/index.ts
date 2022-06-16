import mainPort from "./constants/ports";
import createServer from "./utils/createServer/createServer";

export const { server, httpServer } = createServer(
  parseInt(process.env.PORT || "0") || mainPort,
);

export default server;
