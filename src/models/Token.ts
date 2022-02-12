import { COLLECTION, MODEL, SUB_SCHEMA_OPTIONS, TIMESTAMPS, TimestampsI, TOKEN_STATUS } from "#src/constants/index";
import { model, ObjectId, Schema, Types } from "mongoose";

/* ------------------------- SCHEMA ------------------------- */

const SCHEMA = new Schema<TokenI>(
  {
    user: {
      type: Types.ObjectId,
      ref: MODEL.USER,
      required: true,
    },
    access_token: {
      type: String,
      required: true,
    },
    refresh_token: {
      type: String,
      required: true,
    },
    firebase_token: {
      type: String,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(TOKEN_STATUS),
      default: TOKEN_STATUS.ACTIVE,
    },
    expires_at: {
      type: Date,
    },
    app: {
      type: new Schema<TokenI["app"]>(
        {
          version: {
            type: String,
            required: true,
          },
        },
        SUB_SCHEMA_OPTIONS,
      ),
      required: true,
    },
    os: {
      type: new Schema<TokenI["os"]>(
        {
          name: {
            type: String,
            required: true,
          },
          version: {
            type: String,
            required: true,
          },
        },
        SUB_SCHEMA_OPTIONS,
      ),
      required: true,
    },
    browser: {
      type: new Schema<TokenI["browser"]>(
        {
          name: {
            type: String,
            required: true,
          },
          version: {
            type: String,
            required: true,
          },
        },
        SUB_SCHEMA_OPTIONS,
      ),
    },
  },
  {
    collection: COLLECTION.TOKEN,
    timestamps: TIMESTAMPS,
  },
);

/* ------------------------- MODEL ------------------------- */

export const Token = model(MODEL.TOKEN, SCHEMA);

/* ------------------------- INTERFACES ------------------------- */

export interface TokenI extends TimestampsI {
  user: ObjectId;

  access_token: string;
  refresh_token: string;

  firebase_token?: string;

  status: TOKEN_STATUS;

  expires_at: Date;

  app: {
    version: string;
  };

  os: {
    name: string;
    version: string;
  };

  browser?: {
    name: string;
    version: string;
  };
}
