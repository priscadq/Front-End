import React from 'react';

import ProductItem from './ProductItem';

const ProductList = (props) => (

  <div className="row">
  {
    props.products.map(item => <ProductItem key={item.id} product={item} />)
  }
  </div>
)


export default ProductList;