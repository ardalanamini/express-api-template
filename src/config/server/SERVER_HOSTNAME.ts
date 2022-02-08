import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .string()
  .hostname()
  .required()
  .default("localhost")
  .label("SERVER_HOSTNAME")
  .validate(process.env.SERVER_HOSTNAME);

/* istanbul ignore next */
if (error != null) throw error;

export const SERVER_HOSTNAME = value as string;
