import React, { Component } from 'react';

import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

export default class Home extends Component {
  constructor(props) {
    super(props);

      // Hacemos un mockup de productos en memoria, luego los traeremos de nuestra API
      this.state = {
        products: window.products,
        filteredProducts: window.products,
      };

      //Handlers
      this.filterProducts = this.filterProducts.bind(this);

  }
  filterProducts(filter) {
    // console.log('Filsto desde el padre', filter);
    this.setState({
      filteredProducts: this.state.products.filter( p => p.title.toLowerCase().includes(filter.toLowerCase()))
    })
  }
  render() {    

    return (
      <section>
       
        <div className="container">
          <ProductFilter onProductFilter={this.filterProducts} />
          <ProductList products={this.state.filteredProducts} />

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
          
      </section>
    );
  }
}