import React from 'react';

import ProductItem from './ProductItem';

const ProductList = (props) => (

  <div className="row">
  {
    props.products.map(item => (

     <div className="col-lg-4 col-sm-6 portfolio-item">  key={item.id}  
     <ProductItem product={item} />
     </div>
     )
   )
  }
  </div>
);


export default ProductList;