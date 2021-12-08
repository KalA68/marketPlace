import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart } from '../Store/Slices/cartSlice.js';
import { fetchProductById } from '../Store/Slices/productDetailSlice.js';


function ProductDetail (props) {
    const {id} = useParams();
    const dispatch = useDispatch();
    

    //Hooks & Handlers
    useEffect( ()=>{
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    const [qty, setQty] = useState();

    const product = useSelector((state) => state.productDetail.productDetail[0]);
    console.log(product);
    
    const addToCartHandler = () => {

        dispatch(addToCart(product, qty));
    }

    return(
        <div className="buy-container">
        <div className="product-container">
            
             <div className="img-container"> 
                <img src="./images/shoe1.jpg" alt={product.name}></img>
            </div> 
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price">£{product.price}</div>
            </div>

            <div className="buy">

            <div className="qty">
                <label for="qty">Qty</label>
                <select id="qty" onChange={(e)=>setQty(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div> 
             <button type="submit" onClick={addToCartHandler}>Add</button>
            </div>
         
        </div>
    </div>
        
    );
}

export default ProductDetail;