import { onError } from './on-error.js';

export async function callFn({ id, call: fn, args, onError: errorMiddleware }, meta) {
  try {
    return await fn(args);
  } catch (error) {
    return onError({ id, fn, args, meta, error, errorMiddleware });
  }
}
