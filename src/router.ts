import { NODE_ENV } from "#src/config/index";
import { ENV, HTTP_METHOD, HTTP_METHODS } from "#src/constants/index";
import { Handler, Router } from "express";
import path from "node:path";
import requireAll from "require-all";

/* ------------------------- ROUTER INSTANCE ------------------------- */

const ROUTER = Router();

/* ------------------------- IMPORT CONTROLLERS ------------------------- */

const CONTROLLERS = requireAll({
  dirname: path.resolve(__dirname, "controllers"),
  filter: NODE_ENV === ENV.TEST ? /(.+)\.ts$/ : /* istanbul ignore next */ /(.+)\.js$/,
  recursive: true,
});

/* ------------------------- APPLY CONTROLLERS ------------------------- */

applyControllers();

/* ------------------------- EXPORT ROUTER ------------------------- */

export default ROUTER;

/* ------------------------- HELPERS ------------------------- */

function applyControllers(controllers = CONTROLLERS, prefix = ""): void {
  for (const KEY in controllers) {
    if (!HTTP_METHODS.includes(KEY as HTTP_METHOD)) {
      applyControllers(controllers[KEY], `${prefix}/${KEY.replace(/^\[(.*)]$/, ":$1")}`);

      continue;
    }

    const { CONTROLLER, MIDDLEWARES = [] } = controllers[KEY];

    // TODO: request validators

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ROUTER as any)[KEY.toLowerCase()](prefix, ...MIDDLEWARES.map(wrapController), wrapController(CONTROLLER));
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapController(controller: any): Handler {
  return function wrappedController(req, res, next) {
    try {
      const result = controller(req, res, next);

      if (result instanceof Promise) result.catch(error => next(error));
    } catch (error) {
      next(error);
    }
  };
}
