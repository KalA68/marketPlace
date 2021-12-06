import React from 'react';

function ProductDetail () {
    //     for(let i=1;i<6;i++) document.getElementById("qty").innerHTML(<option key={i} value={i}>i</option>)
    
    return(
        <div className="buy-container">
        <div className="product-container">
            <div className="img-container">
                <img src="./shoe1.jpg" alt = "shoe1"></img>
            </div>
            <div className="product-details">
                <h3>Shoe 1</h3>
                <p>Comfy Shoes that are great to wear casually or for sport pursuits.</p>
                <div className="price">£95.00</div>
            </div>

            <div className="buy">

            <div className="qty">
                <label for="qty">Qty</label>
                <select id="qty" onChange={e=>e.target.value}> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button type="submit">Add</button>           
            </div>
        
        </div>
    </div>
        
    );
}

export default ProductDetail;