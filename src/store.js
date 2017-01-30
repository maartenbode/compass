import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, promiseMiddleware(), logger()),
);

export default store;
