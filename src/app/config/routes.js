import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {
  Default,
  Login,
  Logged,
  Register,
  RecoveryPassword,
  Profile,
  EditProfile,
  Components
} from '../screens';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwt') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const OnlyPublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwt') ? (
        <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <OnlyPublicRoute path="/login" component={Login} />
        <OnlyPublicRoute path="/register" component={Register} />
        <OnlyPublicRoute
          path="/recovery_password"
          component={RecoveryPassword}
        />
        <PrivateRoute path="/home" component={Logged} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/profile/edit" component={EditProfile} />
        <PrivateRoute path="/components" component={Components} />
        <Route path="/" component={Default} />
        <Route component={EditProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
