import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .number()
  .port()
  .default(3000)
  .label("SERVER_PORT")
  .validate(process.env.SERVER_PORT);

/* istanbul ignore next */
if (error != null) throw error;

export const SERVER_PORT = value as number;
