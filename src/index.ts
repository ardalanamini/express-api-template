import { SENTRY_ENABLED, SERVER_HOSTNAME, SERVER_PORT } from "#src/config/index";
import { Sentry } from "#src/lib/index";
import { promisify } from "node:util";
import server from "./server";

const httpServer = server.listen(
  SERVER_PORT,
  SERVER_HOSTNAME,
  () => console.log(`HTTP Server listening at ${SERVER_HOSTNAME}:${SERVER_PORT}`),
);

/* ------------------------- GRACEFUL SHUTDOWN ------------------------- */

process
  .on("SIGTERM", shutdown)
  .on("SIGINT", shutdown);

async function shutdown() {
  console.log("\nGraceful shutdown initiated!");

  try {
    // Stop receiving new requests!
    await promisify(httpServer.close.bind(httpServer))();

    // Gracefully close Sentry connection
    if (SENTRY_ENABLED) await Sentry.close();

    console.log("Shutdown complete!");

    process.exit(0);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
}
