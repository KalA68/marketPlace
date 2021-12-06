import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import productsReducer from "./Slices/productsSlice";

const store =  configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer,
        //add more reducers to store
    }
});

export default store;