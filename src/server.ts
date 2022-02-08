import { NODE_ENV } from "#src/config/index";
import { ENV } from "#src/constants/index";
import router from "#src/router";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
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

/* istanbul ignore next */
if (NODE_ENV === ENV.DEVELOPMENT) server.use(morgan("dev"));

server
  .use(cors())
  .use(helmet());

/* ------------------------- SERVER ENDPOINTS ------------------------- */

server.use(router);

/* ------------------------- SERVER EXPORTS ------------------------- */

export default server;
