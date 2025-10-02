import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    uid: string;
    email: string | null;
}

export interface Profile {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    favorites?: number[];
}

interface AuthState {
    user: User | null;
    profile: Profile | null;
}

const initialState: AuthState = {
    user: null,
    profile: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<Profile | null>) => {
            state.profile = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.profile = null;
        },
    },
});

export const { setUser, logout, setProfile } = authSlice.actions;
export default authSlice.reducer;
