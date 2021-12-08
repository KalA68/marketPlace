import React, { useEffect } from 'react';
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

    const addToCartHandler = () => {
        dispatch(addToCart());
    }
    const data = useSelector(state=>state.productDetail);
    console.log(data);
    const product = data;
    console.log( product);

    const options = [];
    for (let i=1; i<product.countinstock; i++) {
        options.push(`<option value = "${i}">${i}</option>`)
    }

    

    return(
        <div className="buy-container">
        <div className="product-container">
            <div className="img-container">
                <img src={product.image} alt = {product.name}></img>
            </div>
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="price">£{product.price}</div>
            </div>

            <div className="buy">

            <div className="qty">
                <label for="qty">Qty</label>
                <select id="qty" onChange={e=>e.target.value}>   
                    {options}
                </select>
            </div>
            <button type="submit" onClick={addToCartHandler}>Add</button>           
            </div>
        
        </div>
    </div>
        
    );
}

export default ProductDetail;