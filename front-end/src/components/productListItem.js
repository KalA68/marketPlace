import React from 'react';
import {Link} from 'react-router-dom';

function ProductListItem(props) {
  const product = props.product;
  console.log(product.id);

  return (
    <div key={product.id} className="product-list">
    
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name}/>
        <div>
          <div>
              <h3>{product.name}</h3>
              <div className="price">£{product.price}</div>
          </div>
        </div>
      </Link>
      ))
      ;
      
    </div>
  );
}

export default ProductListItem;