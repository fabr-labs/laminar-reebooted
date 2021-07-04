import { flowGenerator } from './flowGenerator.js';
import { applyMiddleware } from './apply-middleware.js';

export function createFlow({ middleware: stepMiddleware, flowMiddleware = [] }) {
  const pushFlow = applyMiddleware(async ({ flow, args = {} }) => {
    for (const directive of flowGenerator({ flow, args, stepMiddleware, meta: { pushFlow } })) {
      await directive;
    }
  }, flowMiddleware);

  return {
    pushFlow,
  };
}
