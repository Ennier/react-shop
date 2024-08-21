import { createSlice } from "@reduxjs/toolkit";


const initialItemsState = {
  items: []
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initialItemsState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },

    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },

  },
});

export const {addItem, removeItem} = cartItemsSlice.actions;

export default cartItemsSlice;