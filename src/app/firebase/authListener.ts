import { getAuth, onAuthStateChanged } from "firebase/auth";
import {logout, setProfile, setUser} from "@/app/authSlice.ts";
import type {AppStore} from "@/app/store.ts";
import { doc, getDoc } from "firebase/firestore";
import {db} from "@/app/firebase/firebase.ts";

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
                    store.dispatch(setProfile(docSnap.data()));
                }
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchProfile();
    });
};
