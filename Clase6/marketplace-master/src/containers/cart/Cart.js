import React from 'react';

import ItemList from './ItemList';

const items = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    quantity: 1
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    quantity: 2
  },
  {
    id: 3,
    title: 'Product 3',
    price: 300,
    quantity: 3
  }
];
export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    // Handlers
    this.decrementProduct = this.decrementProduct.bind(this);
    this.incrementProduct = this.incrementProduct.bind(this);
  }
  decrementProduct(productId) {
    console.log('Product id: ', productId);
  }
  incrementProduct(productId) {
    console.log('Product id: ', productId);
  }
  render() {
    return (
      <section>
        <h1>Cart</h1>
        <div className="row">
          <ItemList decrementProduct={this.decrementProduct} incrementProduct={this.incrementProduct} items={items} />
        </div>
        <p className="text-right">Total: <strong>100</strong></p>
      </section>
    );
  }
}