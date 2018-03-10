import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Admin from './containers/admin/Admin';
import Cart from './containers/cart/Cart';
import Home from './containers/home/Home';
import Product from './containers/product/Product';

import Footer from './layout/Footer';
import Menu from './layout/Menu';

const App = () => (
  <BrowserRouter>
    <section>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/producto/:productId" component={Product} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/cart" component={Cart} />
          <Redirect from="" to="/" />
        </Switch>
      </div>
      <Footer />
    </section>
  </BrowserRouter>
);

export default App;