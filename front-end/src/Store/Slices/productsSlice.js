import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//thunks
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async() => {

        return await fetch("/api/products")
        .then(res => (res.json()));
    
    }
);


export const productsSlice = createSlice({
    name: "products",

    initialState: {
        products: [],
        status: null,
    },
    reducers:{},
    extraReducers: {
        [fetchProducts.pending]: (state)=>{
            state.status = "loading";  
        },
        [fetchProducts.fulfilled]: (state, action)=>{
            state.status = "success"
            state.products = action.payload;
        },
        [fetchProducts.rejected]: (state, action)=>{
            state.status = `failed: ${action.payload}`;
        }

    }
});
//export actions
//export  const { fetchProducts } = productsSlice.action;
//export reducer
export default productsSlice.reducer;