
import React from 'react';
import { connect } from  'react-redux';
import { NavLink } from 'react-router-dom';

const mapStateToProps = (state) => ({
    items: state.cart


});
//componente funcional no de clase

const CartViewer = (props) => (
    <NavLink
      exact
      className="nav-link"
      to="/cart"
      activeClassName="active">
      <i className="fa fa-shopping-cart"></i> ({props.items.length})
    </NavLink>
);

export default connect(mapStateToProps)(CartViewer)