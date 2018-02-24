import React, { Component } from 'react';
import ProductItem from '../home/ProductItem';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: window.products.find(i => i.id === +props.match.params.productId)
    };
  }

  render() {
    return (
      <ProductItem product={this.state.product} />
    );
  }
}