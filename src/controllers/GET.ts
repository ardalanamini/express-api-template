import { API_NAME, API_VERSION } from "#src/config/index";
import { Handler } from "express";

export const CONTROLLER: Handler = (req, res) => {
  res.json({ name: API_NAME, version: API_VERSION });
};

/* ------------------------- SWAGGER ------------------------- */

/**
 * @swagger
 *
 * /:
 *   get:
 *     tags:
 *       - Information
 *     description: Get API name and version
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: The API name and version
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *                 - version
 *               properties:
 *                 name:
 *                   type: string
 *                   example: express-api-template
 *                 version:
 *                   type: string
 *                   format: semver
 *                   example: 1.0.0
 *       500:
 *         $ref: "#/responses/500"
 *
 * definitions:
 *
 *   Meta:
 *     type: object
 *     required:
 *       - skip
 *       - limit
 *       - page_count
 *       - total_count
 *     properties:
 *       page:
 *         type: integer
 *         format: int64
 *         minimum: 0
 *         example: 10
 *       limit:
 *         type: integer
 *         format: int64
 *         minimum: 0
 *         maximum: 100
 *         example: 10
 *       page_count:
 *         type: integer
 *         format: int64
 *         minimum: 0
 *         example: 10
 *       total_count:
 *         type: integer
 *         format: int64
 *         minimum: 0
 *         example: 1000
 *
 * parameters:
 *
 *   skip_query:
 *     description: "Pagination skip parameter"
 *     in: query
 *     name: skip
 *     schema:
 *       type: integer
 *       format: int64
 *       minimum: 0
 *       default: 0
 *       example: 10
 *
 *   limit_query:
 *     description: "Pagination limit parameter"
 *     in: query
 *     name: limit
 *     schema:
 *       type: integer
 *       format: int64
 *       minimum: 1
 *       maximum: 100
 *       default: 10
 *       example: 25
 *
 * responses:
 *
 *   302:
 *     description: "Found"
 *     headers:
 *       Location:
 *         schema:
 *           type: string
 *
 *   400:
 *     description: "Bad Request"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *             - details
 *           properties:
 *             error:
 *               type: string
 *               example: "bad-request"
 *             details:
 *               type: object
 *
 *   401:
 *     description: "Unauthorized"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *           properties:
 *             error:
 *               type: string
 *               example: "unauthorized"
 *
 *   403:
 *     description: "Forbidden"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *           properties:
 *             error:
 *               type: string
 *               example: "forbidden"
 *
 *   404:
 *     description: "Not Found"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *           properties:
 *             error:
 *               type: string
 *               example: "not-found"
 *
 *   422:
 *     description: "Unprocessable Entity"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *             - details
 *           properties:
 *             error:
 *               type: string
 *               example: "unprocessable-entity"
 *             details:
 *               type: object
 *
 *   429:
 *     description: "Too Many Requests"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *           properties:
 *             error:
 *               type: string
 *               example: "too-many-requests"
 *
 *   500:
 *     description: "Internal Server Error"
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           required:
 *             - error
 *           properties:
 *             error:
 *               type: string
 *               example: "internal-server-error"
 *
 */
