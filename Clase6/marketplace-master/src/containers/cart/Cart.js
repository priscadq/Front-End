import React from 'react';

import ItemList from './ItemList';

//conneccion
import { connect } from 'react-redux';
import { decrementProduct, incrementProduct, removeProduct } from '../../actions/cartActions';

const mapStateToProps = (state) => ({
  items: state.cart
});

const mapDispatchToProps = (dispatch) => ({
  decrementProduct: id => dispatch(decrementProduct(id)), 
  incrementProduct: id => dispatch(incrementProduct(id)),
  iremoveProduct: id => dispatch(removeProduct(id)),

})
//-----------------------

class Cart extends React.Component {
  render() {
    return (
      <section>
        <h1>Cart</h1>
        <div className="row">
          <ItemList  items={this.props.items} {...this.props} />
        </div>
        <p className="text-right">Total: <strong>100</strong></p>
      </section>
    );
  }
} 
//conneccion
 export default connect (mapStateToProps, mapDispatchToProps) (Cart);