import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import products from "../../Components/productsData";



const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    setBasketItems: (state, action) => {
      const { id, name, price, buyCount } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.buyCount += buyCount;
      } else {
        state.items.push({ id, name, price, buyCount });
      }
    },
  },
});
export const { setBasketItems } = basketSlice.actions;
export default basketSlice.reducer;
