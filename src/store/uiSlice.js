import {createSlice} from "@reduxjs/toolkit";

const cartIsVisible = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui-slice',
  initialState: cartIsVisible,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;