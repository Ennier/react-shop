import { configureStore } from "@reduxjs/toolkit";

import showCartSlice from "./cartToggle";

const store = configureStore({
    reducer: {
        toggleCart: showCartSlice.reducer,
    }
});

export default store;