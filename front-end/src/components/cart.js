import React from 'react';
import { Link } from 'react-router-dom';
import Order from './order.js'

function Cart() {
  return (
    <div >
      <h1>Shopping Cart</h1>
      <div className="cart-container">

        
        <Order />
        <Order />

        <div className="cart-total">
          <div id="total">Order Total £190.00</div>
        </div>
        <Link to="/payment">
            <button id="btn-checkout" type="submit">Checkout</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Cart;