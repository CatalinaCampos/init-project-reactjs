import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {
  Default,
  Login,
  Logged,
  Register,
  Profile,
  EditProfile,
  Components
} from '../screens';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Logged} />
        <Route path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/components" component={Components} />
        <Route path="/" component={Default} />
        <Route component={EditProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export { routes, PrivateRoute };
