import React, { Component } from 'react';

import Footer from '../../layout/Footer';
import Menu from '../../layout/Menu';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default class Home extends Component {
  render() {
    return (
      <section>
        <Menu />
        <div className="container">
          <ProductFilter />
          <ProductList />
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </div>
        <Footer />            
      </section>
    );
  }
}