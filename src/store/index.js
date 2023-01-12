// Redux store
import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import checkoutSlice from "./checkout-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
});
export default store;
