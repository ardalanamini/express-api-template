import router from "#src/router";
import express from "express";
import { parse } from "qs";

/* ------------------------- EXPRESS INSTANCE ------------------------- */

const server = express();

/* ------------------------- EXPRESS SETTINGS ------------------------- */

server
  .disable("x-powered-by")
  .enable("trust proxy")
  .set("query parser", parse);

/* ------------------------- SERVER ENDPOINTS ------------------------- */

server.use(router);

/* ------------------------- SERVER EXPORTS ------------------------- */

export default server;
