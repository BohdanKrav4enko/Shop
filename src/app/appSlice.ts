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
    themeMode: "light" | "dark";
}

const initialState: AppModeState = {
    isAdmin: false,
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    notification: null,
    categoryId: 0,
    themeMode: (localStorage.getItem("theme") as "light" | "dark") || "light",
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
        toggleTheme(state) {
            state.themeMode = state.themeMode === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.themeMode);
        },
        setTheme(state, action: PayloadAction<"light" | "dark">) {
            state.themeMode = action.payload;
            localStorage.setItem("theme", state.themeMode);
        },
    }
})

export const {
    setAdmin,
    setNotification,
    setCategory,
    addFavorites,
    toggleFavorite,
    removeFavorites,
    clearFavorite,
    toggleTheme,
    setTheme
} = addSlice.actions;
export default addSlice.reducer;