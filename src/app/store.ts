import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from "../api/productsApi.ts";
import cartReducer from "../features/cart/cartSlice.ts";
import appReducer from "./appSlice.ts"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        app: appReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;