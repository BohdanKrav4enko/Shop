import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {Profile} from "@/types/types.ts";

interface User {
    uid: string;
    email: string | null;
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
