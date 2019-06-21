import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {
  HomeDefault,
  Login,
  HomeLogged,
  CreateAccount,
  Profile,
  EditProfile
} from '../screens/';

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeDefault} />
        <Route path='/login' component={Login} />
        <Route path='/new-account' component={CreateAccount} />
        <Route path='/home-auth' component={HomeLogged} />
        <Route path='/profile' component={Profile} />
        <Route path='/profile-edit' component={EditProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;