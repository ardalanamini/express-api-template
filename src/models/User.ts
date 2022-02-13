import {
  COLLECTION,
  MODEL,
  SoftDeleteTimestampsI,
  SUB_SCHEMA_OPTIONS,
  TIMESTAMPS,
  TimestampsI,
} from "#src/constants/index";
import { model, Schema } from "mongoose";

/* ------------------------- SCHEMA ------------------------- */

const SCHEMA = new Schema<UserI>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    google_id: {
      type: String,
    },
    name: {
      type: new Schema<UserI["name"]>(
        {
          first: {
            type: String,
            required: true,
          },
          last: {
            type: String,
          },
        },
        SUB_SCHEMA_OPTIONS,
      ),
      required: true,
    },
    birth_date: {
      type: Date,
      required: true,
    },
    deleted_at: {
      type: Date,
    },
  },
  {
    collection: COLLECTION.USER,
    timestamps: TIMESTAMPS,
  },
);

/* ------------------------- MODEL ------------------------- */

export const User = model(MODEL.USER, SCHEMA);

/* ------------------------- INTERFACES ------------------------- */

export interface UserI extends TimestampsI, SoftDeleteTimestampsI {
  email: `${string}@${string}.${string}`;

  password?: string;

  google_id?: string;

  name: {
    first: string;
    last?: string;
  };

  birth_date: Date;
}

/* ------------------------- SWAGGER ------------------------- */

/**
 * @swagger
 *
 * definitions:
 *   User:
 *     allOf:
 *       - $ref: "#/definitions/DBDocument"
 *       - $ref: "#/definitions/SoftDeletableDocument"
 *       - required:
 *           - email
 *           - name
 *           - birth_date
 *         properties:
 *           email:
 *             type: string
 *             format: email
 *             example: ardalanamini22@gmail.com
 *           name:
 *             type: object
 *             required:
 *               - first
 *             properties:
 *                 first:
 *                   type: string
 *                   example: Ardalan
 *                 last:
 *                   type: string
 *                   example: Amini
 *           birth_date:
 *             type: string
 *             format: date
 *             example: 2022-02-13
 *
 * parameters:
 *   user_id_parameter:
 *     in: path
 *     name: user_id
 *     description: "User id"
 *     required: true
 *     schema:
 *       $ref: "#/definitions/ObjectID"
 *
 * tags:
 *   name: user_model
 *   x-displayName: User
 *   description: |
 *     <SchemaDefinition schemaRef="#/definitions/User" showReadOnly={true} showWriteOnly={true} />
 *
 */
