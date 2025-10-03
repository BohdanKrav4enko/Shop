import { getAuth, onAuthStateChanged } from "firebase/auth";
import {logout, setProfile, setUser} from "@/app/authSlice.ts";
import type {AppStore} from "@/app/store.ts";
import { doc, getDoc } from "firebase/firestore";
import {db} from "@/app/firebase/firebase.ts";
import {setAdmin} from "@/app/appSlice.ts";
import type {Profile} from "@/types/types.ts";

const auth = getAuth();

export const initAuthListener = (store: AppStore) => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            store.dispatch(logout());
            return;
        }

        store.dispatch(setUser({ uid: user.uid, email: user.email }));

        const fetchProfile = async () => {
            try {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const profile = docSnap.data() as Profile;
                    store.dispatch(setProfile(profile));
                    store.dispatch(setAdmin(!!profile.isAdmin))
                }
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchProfile();
    });
};
