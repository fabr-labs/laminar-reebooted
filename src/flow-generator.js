import { callFn } from './call-function.js';
import { applyMiddleware } from './apply-middleware.js';

export function* flowGenerator({ flow, args, middleware, meta }) {
  for (const step of flow(args)) {
    yield applyMiddleware(callFn, middleware, { ...meta, flow })(step);
  }
}
