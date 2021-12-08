import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [
        ],
    },
    reducers:{
        addToCart: (state, action) => {
            state.cart += action.payload;
        },
        removeFromCart: (state, action) => {
            state.cart -= action.payload;
        }
    },
    
});
//export actions
 export  const { addToCart, removeFromCart } = cartSlice.actions;
//export reducer
export default cartSlice.reducer;