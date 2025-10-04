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
        setUser: (state, action) => {
            state.user = action.payload;
            if (action.payload) {
                localStorage.setItem("user", JSON.stringify(action.payload));
            } else {
                localStorage.removeItem("user");
            }
        },
        logout: (state) => {
            state.user = null;
            state.profile = null;
            localStorage.removeItem("user");
        },
    },
});

export const { setUser, logout, setProfile } = authSlice.actions;
export default authSlice.reducer;
