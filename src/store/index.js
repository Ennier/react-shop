import {configureStore} from "@reduxjs/toolkit";

import toggleCartSlice from "./cartToggle";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartSlice.reducer,
  }
});

export default store;