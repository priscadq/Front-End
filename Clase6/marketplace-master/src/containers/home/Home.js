import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import { filterProducts, selectProduct, setCurrentPage } from '../../actions/homeActions';
import { addProduct, incrementProduct } from '../../actions/cartActions';


const mapStateToProps = (state) => ({
  currentPage: state.home.currentPage,
  filteredProducts: state.home.filteredProducts,
  items: state.cart,
  itemsPerPage: state.home.itemsPerPage  
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProduct(product)),
  incrementProduct: id => dispatch(incrementProduct(id)),
  filterProducts: filter => dispatch(filterProducts(filter)),
  setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  selectProduct: product => dispatch(selectProduct(product))
  
});

class Home extends Component {
  constructor(props) {
    super(props);
    // Handlers
    this.handleCheckProductExistence = this.handleCheckProductExistence.bind(this);

    
    this.handleFilterProducts = this.handleFilterProducts.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
  }
  
  
  handleCheckProductExistence(product) {
    addProduct: product => {
      const index =this.props.items.findIndex( i => i.id === product.id);
    
      if (index !== -1 ) {
        this.props.incrementProduct(product.id)
       
      } 
      else{
        this.props.addProduct(product)

      }
  }

 // handleAddProduct(product){
 //   this.props.addProduct(product);
 // }

  handleFilterProducts(filter) {
    this.props.filterProducts(filter);
  }

  handlePageChange(currentPage = 1) {
    this.props.setCurrentPage(currentPage);
  }

  handleSelectProduct(product){
    this.props.selectProduct(product);
  }

  render() {
    const { currentPage, filteredProducts, itemsPerPage } = this.props;
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
      <div>
        <ProductFilter onProductFilter={this.handleFilterProducts} />
        <ProductList 
        products={paginatedProducts} 
        {...this.props}
        />
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