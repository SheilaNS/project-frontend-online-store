import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import CheckoutPage from './components/CheckoutPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={ Home } path="/" exact />
      <Route component={ ShoppingCart } path="/shoppingcart" />
      <Route component={ ProductDetail } path="/productdetail/:id" />
      <Route component={ CheckoutPage } path="/checkoutpage" />

    </Switch>
  </BrowserRouter>
);

export default Routes;
