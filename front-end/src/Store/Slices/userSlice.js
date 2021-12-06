import { createSlice } from "@reduxjs/toolkit";;

export const userSlice = createSlice({
    name: "user",

    initialState: {
        username: '',
        email: '',
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },

    reducers: {
        userRegister: (state, action)=>{
            state.username += action.payload.user.username;
            state.email += action.payload.user.email;
        },

    }
});
//export actions
export const { userRegister } = userSlice.actions;
//export reducer
export default userSlice.reducer;