import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./services/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    // all domains with there reducers func
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
