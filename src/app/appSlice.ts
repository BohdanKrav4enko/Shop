import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AppModeState {
    isAdmin: boolean;
    error: string | null;
    page: number;
}

const initialState: AppModeState = {
    isAdmin: false,
    error: null,
    page: 0,
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
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    }
})

export const {setAdmin, setError, setPage} = addSlice.actions;
export default addSlice.reducer;