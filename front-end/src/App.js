import React from 'react';
import './App.css';
import Home from './components/home.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Cart from './components/cart.js';
import ProductDetail from './components/productDetail';
import Payment from './components/payment.js';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1>marketPlace</h1>
          <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <Link to="/login"><li>Login</li></Link>
          </ul>
        </nav>

        <Routes>
         
            <Route exact path="/" element={<Home />}/>
            <Route exact path ="/login" element={<Login />} />
            <Route exact path = "/product" element={<ProductDetail />} />
            <Route exact path = "/cart" element={<Cart />} />
            <Route exact path = "/register" element={<Register />} />
            <Route exact path = "/payment" element={<Payment />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
