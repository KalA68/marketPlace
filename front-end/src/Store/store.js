import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import productsReducer from "./Slices/productsSlice";
import cartReducer from "./Slices/cartSlice";
import productDetail from './Slices/productDetailSlice';

const store =  configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        productDetail: productDetail,
        cart: cartReducer,
        //add more reducers to store
    }
});

export default store;