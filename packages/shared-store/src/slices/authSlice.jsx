import { createSlice } from "@reduxjs/toolkit";
const authSlice =createSlice({
    name:"auth",
    initialState:{
    accessToken: null,
    csrfToken: null,
    user: null,
    isAuthenticated: false,
    isLoading: true,
    },
    reducers:{
        setAuth:(state,action)=>{
            state.accessToken = action.payload.accessToken;
            state.csrfToken = action.payload.csrfToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        clearAuth:(state,action)=>{
            state.accessToken=null;
            state.csrfToken = null;
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading=false;
        },
        finishLoading:(state,action)=>{
            state.isLoading=false;
        },
    }
})
export const {setAuth,clearAuth,finishLoading} = authSlice.actions;
export default authSlice.reducer;