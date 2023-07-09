import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: [
    {
      pizzaId: 12,
      name: "Napolitan",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      // * payload is a new cart item
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      // * payload is pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      // * payload is pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload
      ) as CartItem;

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      // * payload is pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload
      ) as CartItem;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearItem(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItem,
} = cartSlice.actions;

export default cartSlice.reducer;
