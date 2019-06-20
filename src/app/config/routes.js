import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HomeDefault, Login, HomeLogged } from "../screens/";

const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeDefault} />
        <Route path="/login" component={Login} />
        <Route path="/home-auth" component={HomeLogged} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default routes;
