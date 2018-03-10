import React from 'react';

import ProductItem from './ProductItem';



const ProductList = (props) => {
  const { addProduct, selectProduct } = props;

  return (
  <div className="row">
    {
      props.products.map(item => (<ProductItem key={item.id} product={item} addProduct={addProduct} selectProduct={selectProduct} />))
    }
  </div>
  );
};

export default ProductList;