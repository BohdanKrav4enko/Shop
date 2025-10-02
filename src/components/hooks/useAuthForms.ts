import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/firebase";
import { doc, setDoc } from "firebase/firestore";
import { setNotification } from "@/app/appSlice";
import { useAppDispatch } from "@/components";
import {
    type SignInFormData,
    signInSchema,
    type SignUpFormData,
    signUpSchema
} from "@/components/schemas/schemaAuth";

export const useAuthForms = (onClose: () => void) => {
    const dispatch = useAppDispatch();
    const [signUpMode, setSignUpMode] = useState(false);

    const signUpForm = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", surname: "", date: "", phone: "", email: "", password: "" }
    });

    const signInForm = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" }
    });

    const handleSignUp = async (data: SignUpFormData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", userCredential.user.uid), { ...data, favorites: [] });

            dispatch(setNotification({ type: "info", message: "You have successfully registered." }));
            signUpForm.reset();
            onClose();
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
            dispatch(setNotification({ type: "info", message: `Welcome back, ${userCredential.user.email}` }));

            signInForm.reset();
            onClose();
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
