import { NODE_ENV } from "#src/config/common/index";
import { ENV } from "#src/constants/index";
import { Joi } from "#src/lib/Joi";

let validation = Joi
  .string()
  .uri()
  .label("SENTRY_DSN");

if (NODE_ENV === ENV.PRODUCTION) validation = validation.required();

const { error, value } = validation.validate(process.env.SENTRY_DSN || undefined);

if (error != null) throw error;

export const SENTRY_DSN = value as string | undefined;

export const SENTRY_ENABLED = value !=  null;
