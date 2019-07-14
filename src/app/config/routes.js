import React from 'react';
import { Route, Switch } from 'react-router';
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

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Default} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Logged} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/profile/edit" component={EditProfile} />
        <Route path="/components" component={Components} />
        <Route component={EditProfile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
