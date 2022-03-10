import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ Home } path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
