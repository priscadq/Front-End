import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Admin from './containers/admin/Admin';
import Home from './containers/home/Home';
import Product from './containers/product/Product';

import Footer from './layout/Footer';
import Menu from './layout/Menu';

const getProducts = () => {
  const items = [];
  const words = ['Monitor', 'Zapatillas', 'iPhone X', 'Pixel 2', 'Smart TV Sony 40', 'Proyector EPSON', 'Impresora Laser HP', 'Renault 12', 'Billetera', 'Cartera'];

  for (let i = 1; i <= 10; i++) {
    items.push(
      {
        id: i,
        imageUrl: 'http://placehold.it/700x400',
        title: words[i - 1],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!'
      }
    );
  }

  return items;
};

window.products = getProducts();

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