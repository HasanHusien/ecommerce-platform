import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  // domain
  name: "cart",
  initialState,
  // action creators + reducer
  reducers: {
    addItem(state, action) {
      // payload newItem
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      
      // cartSlice.caseReducers.deleteItem(state,action) make i reuse action creators
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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

// use in useSelector hook  - get global state data
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById =
  // ?? 0 mean is undefined return 0
  (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
const array = [1, 2, 3, 4, 5, "ahmed", "ali", 99];

console.log(array.find((e) => e == "snake") ?? 0);
