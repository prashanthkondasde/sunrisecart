import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";

let storeInstance = null

  
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer
  },
});               
