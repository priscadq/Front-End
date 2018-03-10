import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions';
/*
const mapStateToProps = (state) => ({
  selectedProduct
})*/

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: window.products.find(i => i.id === +props.match.params.productId)
    };
  }



  render() {
    const { description, imageUrl, title } = this.state.product;
    
    return (
      <div className="card h-100">
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}