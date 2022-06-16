import { Express, json as jsonBodyParser } from "express";
import cors from "cors";

const applyMiddlewares = (instance: Express): void => {
  instance.use(jsonBodyParser());
  instance.use(cors());
};

export default applyMiddlewares;
