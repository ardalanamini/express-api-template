import { API_VERSION, NODE_ENV, RELEASE_ENV, SENTRY_DSN, SENTRY_ENABLED } from "#src/config/index";
import { ENV } from "#src/constants/index";
import router from "#src/router";
import * as sentry from "@sentry/node";
import * as sentryTracing from "@sentry/tracing";

if (SENTRY_ENABLED) {
  sentry.init({
    dsn: SENTRY_DSN,
    integrations: [
      // enable HTTP calls tracing
      new sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new sentryTracing.Integrations.Express({ router }),
    ],
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    environment: RELEASE_ENV,
    release: NODE_ENV === ENV.PRODUCTION ? API_VERSION : undefined,
  });
}

export const Sentry = sentry;
