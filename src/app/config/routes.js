import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  Default,
  Login,
  Home,
  Register,
  RecoveryPassword,
  Profile,
  EditProfile,
  Components,
  Other
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
  <Switch>
    <OnlyPublicRoute path="/login" component={Login} />
    <OnlyPublicRoute path="/register" component={Register} />
    <OnlyPublicRoute path="/recovery_password" component={RecoveryPassword} />
    <PrivateRoute path="/home" component={Home} />
    <PrivateRoute path="/profile" component={Profile} />
    <PrivateRoute path="/profile/edit" component={EditProfile} />
    <PrivateRoute path="/components" component={Components} />
    <Route exact path="/" component={Default} />
    <Route path="/:page" component={Other} />
  </Switch>
);

export default routes;
