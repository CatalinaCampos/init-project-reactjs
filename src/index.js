import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import store, { history } from './app/config/store';
import { routes } from './app/config/routes';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
