import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ Home } path="/" exact />
      <Route component={ ShoppingCart } path="/shoppingcart" />
      <Route component={ ProductDetail } path="/productdetail/:id" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
