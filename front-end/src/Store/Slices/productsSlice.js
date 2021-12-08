import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//thunks
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async() => {
        try {
            const response = await fetch("/api/products");
            // const res = response.json();
            // return res.rows;
            return await response.json();
        } catch (error) {
            return ({error: error.message});
        }
        
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById', 
    async(id) => {
        try {
            const response = await fetch(`/api/product/${id}`);
            return await response.json();

        } catch (error) {
            return ({error: error.message});
        }
        
    }
);

//Slice
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
        },

    }
});
//export actions
//export reducer
export default productsSlice.reducer;