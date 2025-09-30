import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AppModeState {
    isAdmin: boolean;
    error: string | null;
    categoryId: number;
}

const initialState: AppModeState = {
    isAdmin: JSON.parse(localStorage.getItem('isAdmin') || 'false'),
    error: null,
    categoryId: 0,
}

export const addSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setCategory: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
    }
})

export const {setAdmin, setError, setCategory} = addSlice.actions;
export default addSlice.reducer;