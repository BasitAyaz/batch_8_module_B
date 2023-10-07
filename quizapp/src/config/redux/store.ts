import { configureStore } from "@reduxjs/toolkit";
import userslice from "./reducers/userslice";
import cartslice from "./reducers/cartslice";

const store = configureStore({
  reducer: {
    user: userslice,
    cart: cartslice,
  },
});

export default store;
