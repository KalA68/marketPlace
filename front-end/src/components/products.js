import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {fetchProducts} from '../Store/Slices/productsSlice';

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(()=> {
    dispatch(fetchProducts());
  });
  return (
    <div  className="product-list">
    
      <Link to="/product" >
        <img src="../images/shoe1.jpg" alt="shoe1"/>
      </Link>
      <div>
        <div>
            <h3>Shoe 1</h3>
            <div className="price">£30</div>
        </div>
      </div>
    </div>
  );
}

export default Products;