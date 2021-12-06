import React, { useEffect } from 'react';
import Products from './products.js';

function Home() {
  useEffect(()=>{
    fetchItems();
  },[])
const fetchItems = async() => {
  const data = await fetch('url for file');
  console.log(data);
}

  return (
    <div >
      <h1>Shop Window</h1>
      <div className = "container">
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default Home;
