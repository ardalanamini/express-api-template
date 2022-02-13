export * from "./Token";
export * from "./User";

/* ------------------------- SWAGGER ------------------------- */

/**
 * @swagger
 *
 * definitions:
 *   DBDocument:
 *     type: object
 *     required:
 *       - id
 *       - created_at
 *       - updated_at
 *     properties:
 *       id:
 *         $ref: "#/definitions/ObjectID"
 *       created_at:
 *         $ref: "#/definitions/Timestamp"
 *       updated_at:
 *         $ref: "#/definitions/Timestamp"
 *
 *   SoftDeletableDocument:
 *     type: object
 *     properties:
 *       deleted_at:
 *         $ref: "#/definitions/Timestamp"
 *
 *   ObjectID:
 *     type: string
 *     readOnly: true
 *     format: ObjectID
 *     example: a1b2c3d
 *
 *   Timestamp:
 *     type: string
 *     readOnly: true
 *     format: date-time
 *     example: 2022-02-13T20:38:28Z
 *
 */
