import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomeDefault  from '../screens/Home/HomeDefault';

const routes = (
    <div>
        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={HomeDefault} />
        </Switch>
        </BrowserRouter>
    </div>
)

export default routes; 