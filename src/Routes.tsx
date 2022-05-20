import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from './pages/startPage/StartPage';
import ProductsPage from './pages/productsPage/ProductsPage';
import BasketPage from "./pages/basketPage/BasketPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={StartPage} />
      <Route path="/products" exact component={ProductsPage} />
      <Route path="/basket" exact component={BasketPage} />
    </Switch>
  );
}
