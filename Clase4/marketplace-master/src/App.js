import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./containers/admin/Admin.js";
import Home from "./containers/home/Home.js";
import Product from "./containers/product/Product.js";

import Footer from "./layout/Footer";
import Menu from "./layout/Menu";

const App = () => (
  <BrowserRouter>
    <section>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/admin" component={Admin} />
      <Footer />
    </section>
  </BrowserRouter>
);

export default App;
