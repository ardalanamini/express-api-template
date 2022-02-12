import { Joi } from "#src/lib/Joi";

const { error, value } = Joi
  .string()
  .uri()
  .required()
  .label("DATABASE_URI")
  .validate(process.env.DATABASE_URI);

if (error != null) throw error;

export const DATABASE_URI = value as string;
