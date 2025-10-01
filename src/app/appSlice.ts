import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface Notification {
    message: string;
    type: "success" | "error" | "info";
    duration?: number;
    id: string;
}

interface AppModeState {
    isAdmin: boolean;
    notification: Notification | null;
    categoryId: number;
    favorites: number[];
}

const initialState: AppModeState = {
    isAdmin: JSON.parse(localStorage.getItem('isAdmin') || 'false'),
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    notification: null,
    categoryId: 0,
}

export const addSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        },
        setNotification: (state, action: PayloadAction<Omit<Notification, "id">>) => {
            state.notification = {
                ...action.payload,
                id: crypto.randomUUID(),
            };
        },
        setCategory: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        addFavorites: (state, action: PayloadAction<number>) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorites: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(id => id !== action.payload);
        },
        toggleFavorite: (state, action: PayloadAction<number>) => {
            if (state.favorites.includes(action.payload)) {
                state.favorites = state.favorites.filter(id => id !== action.payload);
            } else {
                state.favorites.push(action.payload);
            }
        },
        clearFavorite: (state) => {
            state.favorites = []
        },
    }
})

export const {setAdmin, setNotification, setCategory, addFavorites, toggleFavorite, removeFavorites, clearFavorite} = addSlice.actions;
export default addSlice.reducer;