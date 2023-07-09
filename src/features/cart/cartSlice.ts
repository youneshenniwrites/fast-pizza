import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";
import { RootState } from "../../store/store";

type CartState = {
  cart: CartItem[];
};

const initialState: CartState = {
  cart: [],
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
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartItems = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

/* 
  * This is a memoised version of the getTotalCartQuantity selector. *
  * RTK recommends this approach for large applications. *
  * https://github.com/reduxjs/reselect *
  
const getCartItems = (state: RootState) => state.cart.cart;

const getTotalCartQuantity = createSelector(getCartItems, (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
*/
