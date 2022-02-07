import { ENV } from "#src/constants/index";
import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .string()
  .valid(...Object.values(ENV))
  .required()
  .default(ENV.DEVELOPMENT)
  .label("NODE_ENV")
  .validate(process.env.NODE_ENV);

if (error != null) throw error;

process.env.NODE_ENV = value;

export const NODE_ENV = value as ENV;
