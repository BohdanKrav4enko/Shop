import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase/firebase.ts";
import { doc, setDoc } from "firebase/firestore";
import { setNotification } from "@/app/appSlice";
import {useAppDispatch} from "@/components";
import {
    type SignInFormData,
    signInSchema,
    type SignUpFormData,
    signUpSchema
} from "@/components/schemas/schemaAuth";
import {closeModal} from "@/app/modalSlice.ts";
import {store} from "@/app/store.ts";
import {setUser} from "@/app/authSlice.ts";

export const useAuthForms = () => {
    const dispatch = useAppDispatch();
    const [signUpMode, setSignUpMode] = useState(false);

    const signUpForm = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", surname: "", phone: "", email: "", password: "" }
    });

    const signInForm = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" }
    });

    const handleSignUp = async (data: SignUpFormData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", userCredential.user.uid), { ...data, favorites: [], isAdmin: false});
            store.dispatch(setUser({ uid: userCredential.user.uid, email: userCredential.user.email }));
            dispatch(setNotification({ type: "info", message: "You have successfully registered." }));
            signUpForm.reset();
            dispatch(closeModal())
        } catch (error: unknown) {
            dispatch(setNotification({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong"
            }));
        }
    };

    const handleSignIn = async (data: SignInFormData) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            store.dispatch(setUser({ uid: userCredential.user.uid, email: userCredential.user.email }));
            dispatch(setNotification({ type: "info", message: `Welcome back` }));
            signInForm.reset();
            dispatch(closeModal())
        } catch (error: unknown) {
            dispatch(setNotification({
                type: "error",
                message: error instanceof Error ? error.message : "Something went wrong"
            }));
        }
    };

    return {
        signUpMode,
        setSignUpMode,
        signUpForm,
        signInForm,
        handleSignUp,
        handleSignIn
    };
};
