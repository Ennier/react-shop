import {configureStore} from "@reduxjs/toolkit";

import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    uiSlice: uiSlice.reducer,
    cartSlice: cartSlice.reducer
  }
});

export default store;