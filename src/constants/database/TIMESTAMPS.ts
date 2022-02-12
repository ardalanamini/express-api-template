import type { SchemaTimestampsConfig } from "mongoose";

export enum TIMESTAMP {
  CREATED_AT = "created_at",
  UPDATED_AT = "updated_at",
  DELETED_AT = "deleted_at",
}

export const TIMESTAMPS: SchemaTimestampsConfig = {
  createdAt: TIMESTAMP.CREATED_AT,
  updatedAt: TIMESTAMP.UPDATED_AT,
};

export interface TimestampsI {
  [TIMESTAMP.CREATED_AT]: Date,
  [TIMESTAMP.UPDATED_AT]: Date,
}

export interface SoftDeleteTimestampsI {
  [TIMESTAMP.DELETED_AT]?: Date,
}
