import { RELEASE } from "#src/constants/index";
import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .string()
  .valid(...Object.values(RELEASE))
  .default(RELEASE.STAGING)
  .label("RELEASE_ENV")
  .validate(process.env.RELEASE_ENV);

if (error != null) throw error;

export const RELEASE_ENV = value as RELEASE;
