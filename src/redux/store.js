import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/productsSlice";
import basketSlice from "./Slices/basketSlice";



const store = configureStore({
    reducer:{
        products:productsSlice,
        basket:basketSlice,
        
    }
})
export default store;