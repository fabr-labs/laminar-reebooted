import { callFn } from './call-function.js';
import { applyMiddleware } from './applyMiddleware.js';

export function* flowGenerator({ flow, args, middleware, meta }) {
  for (const directive of flow(args)) {
    yield applyMiddleware(callFn, middleware, { ...meta, flow })(directive);
  }
}
