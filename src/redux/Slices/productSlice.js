import { createSlice } from "@reduxjs/toolkit";
import products from "../../Components/productsData";

const productSlice = createSlice({
  name: "products",
  initialState: [...products],
  reducers: {
  },
});
// export const { login, logout } = productSlice.actions;
export default productSlice.reducer;