import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Product} from "../../types/types.ts";

interface CartItem extends Product {
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('items') || '[]'),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<Product>) => {
            const item = state.items.find((i) => i.id === action.payload.id)
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = []
        },
        decrementCart: (state, action: PayloadAction<number>) => {
            const item = state.items.find((i) => i.id === action.payload)
            if (item) {
                if (item.quantity > 1) item.quantity -= 1;
            }
        }
    },
})

export const {addCart, removeCart, decrementCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
