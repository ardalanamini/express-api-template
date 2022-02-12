import type { SchemaOptions } from "mongoose";

export const SUB_SCHEMA_OPTIONS: SchemaOptions = {
  _id: false,
  timestamps: false,
  versionKey: false,
};
