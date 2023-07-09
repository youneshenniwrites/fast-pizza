import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
