import React, { Component } from 'react';

import ProductItem from './ProductItem';

export default class ProductList extends Component {
  render() {
    // Hacemos un mockup de productos en memoria, luego los traeremos de nuestra API
    const products = new Array(7).fill(
      { 
        imageUrl: 'http://placehold.it/700x400', 
        title: 'Project One', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!' 
      }
    );

    return (
      <div className="row">
        {
          products.map((item, index) => <ProductItem key={index} product={item} />)
        }
      </div>
    );
  }
}