import {createSlice} from "@reduxjs/toolkit";


const initialItemsState = {
  items: []
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initialItemsState,
  reducers: {
    addItem(state, item) {
      state.items = {...state.items, item}
    },
    removeItem(state, item) {
      state.items = state.items.slice()
    }
  }
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice;