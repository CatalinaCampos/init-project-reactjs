import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import utils from './utils';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    utils
  });

export default createRootReducer;
