import {createSlice} from "@reduxjs/toolkit";

const cartIsVisible = { cartIsVisible: true, notification: null };

const uiSlice = createSlice({
  name: 'ui-slice',
  initialState: cartIsVisible,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;