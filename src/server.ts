import router from "#src/router";
import cors from "cors";
import express from "express";
import { parse } from "qs";

/* ------------------------- EXPRESS INSTANCE ------------------------- */

const server = express();

/* ------------------------- EXPRESS SETTINGS ------------------------- */

server
  .disable("x-powered-by")
  .enable("trust proxy")
  .set("query parser", parse)
  .set("json replacer fn", (key: string, value: unknown): unknown => key[0] === "_" ? undefined : value);

/* ------------------------- SERVER MIDDLEWARES ------------------------- */

server
  .use(cors());

/* ------------------------- SERVER ENDPOINTS ------------------------- */

server.use(router);

/* ------------------------- SERVER EXPORTS ------------------------- */

export default server;
