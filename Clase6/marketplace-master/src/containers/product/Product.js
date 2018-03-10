import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
  allProducts: state.home.allProducts,
  selectedProduct: state.home.selectedProduct
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProduct(product))
});


class Product extends Component {
  render() {
    
    const product = this.props.selectedProduct 
    || this.props.allProducts.find(i => i.id === +this.props.match.params.productId);
    const { description, imageUrl, title } = product;
    
    return (
      <div className="card h-100">
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>

          <p className="text-center">
              <button className="btn btn-dark" onClick={() => this.props.addProduct(product)}>Add (+)</button>
          </p>

        </div>
      </div>
    );
  };
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Product);