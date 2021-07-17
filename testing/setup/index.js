import { combineReducers, createStore } from 'redux';
import { createFlow, flowEventsMiddleware } from "../..";


export function setupTestFlow({ flowMiddleware =  [], stepMiddleware = [], errorMiddleware = [], reducers = {} }) {
  const store = createStore(combineReducers(reducers));
  const flowEvents = flowEventsMiddleware();
  const defaultTestMiddleware = [reduxStoreMiddleware(store), flowEvents.middleware];
  const flow = createFlow({ stepMiddleware: [...defaultTestMiddleware, ...stepMiddleware] });

  return {
    flow,
    flowEvents,
    store,
  }
}
