import { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "@/app/firebase/firebase.ts";
import { useAppDispatch, useAppSelector } from "@/components";
import { setAdmin, setNotification } from "@/app/appSlice.ts";
import {logout, setProfile} from "@/app/authSlice.ts";
import { PATH } from "@/routes/paths.ts";
import type { EditFormData } from "@/components/schemas/schemaAuth.tsx";
import { editSchema } from "@/components/schemas/schemaAuth.tsx";
import {getAuth, signOut} from "firebase/auth";
import {setOpenModal} from "@/app/modalSlice.ts";

export const useAboutMe = () => {
    const profile = useAppSelector(state => state.auth.profile);
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const [isEdit, setEdit] = useState(false);


    const { control, register, handleSubmit, watch, reset, formState: { errors } } = useForm<EditFormData>({
        resolver: zodResolver(editSchema),
        defaultValues: {
            name: profile?.name || "",
            surname: profile?.surname || "",
            email: profile?.email || "",
            phone: profile?.phone || "",
            isAdmin: profile?.isAdmin || false,
        }
    });

    useEffect(() => {
        if (profile) {
            reset({
                name: profile.name || "",
                surname: profile.surname || "",
                email: profile.email || "",
                phone: profile.phone || "",
                isAdmin: profile.isAdmin || false,
            });
        }
    }, [profile, reset]);

    const defaultValues = useMemo(() => ({
        name: profile?.name || "",
        surname: profile?.surname || "",
        email: profile?.email || "",
        phone: profile?.phone || "",
        isAdmin: profile?.isAdmin || false,
    }), [profile]);

    const isChanged = JSON.stringify(watch()) !== JSON.stringify(defaultValues);

    const onSubmit = async (data: EditFormData) => {
        if (!user?.uid) return;
        try {
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, data);
            dispatch(setNotification({ type: "success", message: "Profile updated successfully!" }));
            dispatch(setProfile(data));
            dispatch(setAdmin(data.isAdmin));
            setEdit(false);
        } catch (error) {
            dispatch(setNotification({ type: "error", message: `Error updating profile: ${error}` }));
        }
    };

    const handleCancelOrHome = () => {
        if (isEdit) {
            reset(defaultValues);
            setEdit(false);
        } else {
            navigate(PATH.HOME);
        }
    };
    const logoutHandler = async () => {
        navigate(PATH.HOME);
        try {
            await signOut(auth);
            dispatch(logout());
            dispatch(setOpenModal(null));
            dispatch(setAdmin(false));
            dispatch(setNotification({
                type: "info",
                message: "You have successfully logged out of your account."
            }));
        } catch (error) {
            dispatch(setNotification({
                type: "error",
                message: `Logout error: ${error instanceof Error ? error.message : error}`
            }));
        }
    };


    return {
        profile,
        isEdit,
        setEdit,
        control,
        register,
        handleSubmit,
        onSubmit,
        errors,
        isChanged,
        handleCancelOrHome,
        logoutHandler
    };
};
