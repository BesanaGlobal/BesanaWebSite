import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./slices/user/userSlice";
import { cartSlice } from "./slices/cart/cartSlice";

export const userStore = configureStore({
    reducer:{
        user:userSlice.reducer,
        cart:cartSlice.reducer
    }
})