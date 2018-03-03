import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Admin from './containers/admin/Admin';
import Home from './containers/home/Home';
import Product from './containers/product/Product';

import Footer from './layout/Footer';
import Menu from './layout/Menu';



const App = () => (
  <BrowserRouter>
    <section>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/producto/:productId" component={Product} />
        <Route exact path="/admin" component={Admin} />
        <Redirect from="" to="/" />
      </Switch>
      <Footer />
    </section>
  </BrowserRouter>
);

export default App;