import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import { filterProducts } from  '../../actions/productActions';

const mapStateToProps = (state) => ({
  products: state.products,
  filteredProducts: state.filteredProducts,
});
const mapDispatchToProps = (dispatch) => ({
  filterProducts: filter => dispatch(filterProducts(filter))
});

class Home extends Component {
  constructor(props) {
    super(props);

    // Hacemos un mockup de productos en memoria, luego los traeremos de nuestra API
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
      
    };

    // Handlers
    this.handleFilterProducts = this.handleFilterProducts.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleFilterProducts(filter) {
    this.props.filterProducts(filter)
  }

  handlePageChange(currentPage = 1) {
    this.setState({
      currentPage
    });
  }

  render() {
    console.log(this.props)
    const { currentPage, itemsPerPage } = this.state;
    const { filteredProducts } = this.props;
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

//solo para los containers, lo contenedores hay que conectarlos con redux
export default connect(mapStateToProps, mapDispatchToProps)(Home);