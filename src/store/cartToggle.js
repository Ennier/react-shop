import {createSlice} from "@reduxjs/toolkit";

const initialShowState = {
  isShowed: true
};

const toggleCartSlice = createSlice({
  name: 'toggleCart',
  initialState: initialShowState,
  reducers: {
    toggleCart(state) {
      state.isShowed = !state.isShowed;
    }
  }
});

export const toggleCartActions = toggleCartSlice.actions;

export default toggleCartSlice;