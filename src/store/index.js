import {configureStore} from "@reduxjs/toolkit";

import toggleCartSlice from "./cartToggle";
import cartItemsSlice from "./cartItems";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartSlice.reducer,
    cartItems: cartItemsSlice.reducer
  }
});

export default store;