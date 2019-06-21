import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {
  Default,
  Login,
  Logged,
  CreateAccount,
  Profile,
  EditProfile
} from '../screens/';

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Default} />
        <Route path='/login' component={Login} />
        <Route path='/new-account' component={CreateAccount} />
        <Route path='/home-auth' component={Logged} />
        <Route path='/profile' component={Profile} />
        <Route path='/profile-edit' component={EditProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;