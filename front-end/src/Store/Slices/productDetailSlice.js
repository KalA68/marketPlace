import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export const productDetailSlice = createSlice({
    name: "productDetail",

    initialState: {       
        productDetail: [],
        qty: null,
        status: null,
    },
    reducers:{
    },
    extraReducers: {
        [fetchProductById.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchProductById.fulfilled]: (state, action)=>{
            state.status = 'success'
            state.productDetail = action.payload;
        },
        [fetchProductById.rejected]: (state, action)=>{
            state.status = `failed:  ${action.payload}`;
        }

    }
});
//export actions

//export reducer
export default productDetailSlice.reducer;