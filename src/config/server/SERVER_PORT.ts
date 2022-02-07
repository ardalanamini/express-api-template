import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .number()
  .port()
  .required()
  .default(3000)
  .label("SERVER_PORT")
  .validate(process.env.SERVER_PORT);

if (error != null) throw error;

export const SERVER_PORT = value as number;
