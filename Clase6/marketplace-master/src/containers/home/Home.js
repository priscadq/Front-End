import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import { filterProducts, setCurrentPage } from '../../actions/homeActions';

const mapStateToProps = (state) => ({
  currentPage: state.home.currentPage,
  filteredProducts: state.home.filteredProducts,
  itemsPerPage: state.home.itemsPerPage
});

const mapDispatchToProps = (dispatch) => ({
  filterProducts: filter => dispatch(filterProducts(filter)),
  setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage))
});

class Home extends Component {
  constructor(props) {
    super(props);
    // Handlers
    this.handleFilterProducts = this.handleFilterProducts.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleFilterProducts(filter) {
    this.props.filterProducts(filter);
  }

  handlePageChange(currentPage = 1) {
    this.props.setCurrentPage(currentPage);
  }

  render() {
    const { currentPage, filteredProducts, itemsPerPage } = this.props;
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div>
        <ProductFilter onProductFilter={this.handleFilterProducts} />
        <ProductList products={paginatedProducts} />
        <ProductPagination
          itemsPerPage={itemsPerPage}
          onCurrentPageChange={this.handlePageChange}
          totalItems={filteredProducts.length} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);