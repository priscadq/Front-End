import React, { Component } from 'react';

import ProductFilter from './ProductFilter';
import ProductList from './ProductList';

const getProducts = () => {
     const items = [];

     for (let i = 1; i <= 10 ; i++) {
       items.push (
         {
           id: i,
           imageUrl: 'http://placehold.it/700x400', 
           title: 'Producto '+ i,
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!' 
          }
       );
     }
     return items;      
} 

window.products = getProducts();

export default class Home extends Component {
  constructor(props) {
    super(props);

      // Hacemos un mockup de productos en memoria, luego los traeremos de nuestra API
      this.state = {
        products: window.products
      };

  }

  render() {    

    return (
      <section>
       
        <div className="container">
          <ProductFilter />
          <ProductList products={this.state.products} />

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