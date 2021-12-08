import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/Slices/productsSlice.js';
import ProductListItem from './productListItem.js';

function Home() {
  const dispatch = useDispatch();
  useEffect( ()=>{
    dispatch(fetchProducts());
  }, [dispatch]);

  const productList = useSelector( (state) => state.products.products);
  console.log(productList);

  return (
    <div >
      <h1>Shop Window</h1>
      <div className = "container">
        {productList.map((product) => (
          <ProductListItem key={product.id} product={product}/>
        ))}
        
      </div>
    </div>
  );
};

export default Home;
