import React, { Component } from 'react';

import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';

export default class Home extends Component {
  constructor(props) {
    super(props);

    // Hacemos un mockup de productos en memoria, luego los traeremos de nuestra API
    this.state = {
      currentPage: 1,
      filteredProducts: window.products,
      itemsPerPage: 3,
      products: window.products
    };

    // Handlers
    this.handleFilterProducts = this.handleFilterProducts.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleFilterProducts(filter) {
    this.setState({
      filteredProducts: this.state.products.filter(p => p.title.trim().toLowerCase().includes(filter.trim().toLowerCase()))
    });
  }

  handlePageChange(currentPage = 1) {
    this.setState({
      currentPage
    });
  }

  render() {
    const { currentPage, filteredProducts, itemsPerPage } = this.state;
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    return (
      <div className="container">
        <ProductFilter onProductFilter={this.handleFilterProducts} />
        <ProductList products={paginatedProducts} />
        <ProductPagination itemsPerPage={itemsPerPage} onCurrentPageChange={this.handlePageChange} totalItems={filteredProducts.length} />
      </div>
    );
  }
}