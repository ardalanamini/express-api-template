import { NODE_ENV } from "#src/config/index";
import { ENV } from "#src/constants/index";
import { Sentry } from "#src/lib/index";
import router from "#src/router";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { parse } from "qs";

/* ------------------------- EXPRESS INSTANCE ------------------------- */

const server = express();

/* ------------------------- EXPRESS SETTINGS ------------------------- */

// The request handler must be the first middleware on the server
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
server.use(Sentry.Handlers.requestHandler({
  user: ["id"],
  ip: true,
}));
// TracingHandler creates a trace for every incoming request
server.use(Sentry.Handlers.tracingHandler());

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

/* ------------------------- SERVER ERROR HANDLERS ------------------------- */

// The error handler must be before any other error middleware and after all controllers
server.use(Sentry.Handlers.errorHandler());
// TODO: custom errors
// server.use(
//   Sentry.Handlers.errorHandler({
//     shouldHandleError(error) {
//       // Capture all 404 and 500 errors
//       if (error.status === 404 || error.status === 500) {
//         return true;
//       }
//       return false;
//     },
//   }),
// );

/* ------------------------- SERVER EXPORTS ------------------------- */

export default server;
