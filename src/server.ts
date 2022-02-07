import router from "#src/router";
import express from "express";

/* ------------------------- EXPRESS INSTANCE ------------------------- */

const server = express();

/* ------------------------- EXPRESS SETTINGS ------------------------- */

server
  .disable("x-powered-by")
  .enable("trust proxy");

/* ------------------------- SERVER ENDPOINTS ------------------------- */

server.use(router);

/* ------------------------- SERVER EXPORTS ------------------------- */

export default server;
