import { flowGenerator } from './flow-generator.js';
import { applyMiddleware } from './apply-middleware.js';

export function createFlow({ stepMiddleware = [], flowMiddleware = [] }) {
  const pushFlow = applyMiddleware(async ({ flow, args = {} }) => {
    for (const step of flowGenerator({ flow, args, stepMiddleware, meta: { pushFlow } })) {
      await step;
    }
  }, flowMiddleware);

  return {
    pushFlow,
  };
}
