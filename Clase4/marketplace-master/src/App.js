import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Admin from "./containers/admin/Admin.js";
import Home from "./containers/home/Home.js";
import Product from "./containers/product/Product.js";

import Footer from "./layout/Footer";
import Menu from "./layout/Menu";

const App = () => (
  <BrowserRouter>
    <section>
      <Menu />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/producto/:productId" component={Product} />
      <Route eaxct path="/admin" component={Admin} />
      <Redirect from=""  to="/" />
      </Switch>
      <Footer />
    </section>
  </BrowserRouter>
);

export default App;
