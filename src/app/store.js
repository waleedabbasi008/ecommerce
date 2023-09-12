import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../app/Features/CartSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer, 
    },
})