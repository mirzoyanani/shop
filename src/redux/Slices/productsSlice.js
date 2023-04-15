import { createSlice } from "@reduxjs/toolkit";
// import products from "../../Components/productsData";

const productsSlice = createSlice({
  name: "products",
  initialState:{
     products:[],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // incrementCount: state => {
    //   state.productCount += 1
    // },
    // decrementCount: state => {
    //   state.productCount -= 1
    // }
    incrementCount: (state, action) => {
      const { productId } = action.payload
      const product = state.products.find(p => p.id === productId)
      if (product) {
        product.quantity++
      }
    },
    decrementCount: (state, action) => {
      const { productId } = action.payload
      const product = state.products.find(p => p.id === productId)
      if (product && product.quantity > 0) {
        product.quantity--
      }
    }
  },
});

export const { setProducts,incrementCount, decrementCount } = productsSlice.actions;
export default productsSlice.reducer;