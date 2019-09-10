import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

const sagaMW = createSagaMiddleware();
const routerMW = routerMiddleware(history);
const middleware = [sagaMW, routerMW];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(history),
  composeEnhancer(applyMiddleware(...middleware))
);

sagaMW.run(rootSaga);

export default store;
