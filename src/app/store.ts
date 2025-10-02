import { configureStore } from '@reduxjs/toolkit';
import {productsApi} from "../api/productsApi.ts";
import cartReducer from "../features/cart/cartSlice.ts";
import appReducer from "./appSlice.ts"
import authReducer from "./authSlice.ts"
import modalReducer from "./modalSlice.ts"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        app: appReducer,
        auth: authReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('isAdmin', JSON.stringify(state.app.isAdmin));
    localStorage.setItem('items', JSON.stringify(state.cart.items));
    localStorage.setItem('favorites', JSON.stringify(state.app.favorites));
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store