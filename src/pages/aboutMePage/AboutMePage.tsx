import { PATH } from "@/routes/paths.ts";
import {
    AboutMeContainer,
    AboutMeInput,
    AboutMeSection,
    AboutMeSubTitle,
    AboutMeText,
    AboutMeTitle,
    StyleMeError
} from "./index.ts";
import { StyledButton, useAppDispatch, useAppSelector } from "@/components";
import { ArrowLeft, BadgeCheck, House, Pencil, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase/firebase.ts";
import { setAdmin, setNotification } from "@/app/appSlice.ts";
import { setProfile } from "@/app/authSlice.ts";
import { Switch } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {type EditFormData, editSchema} from "@/components/schemas/schemaAuth.tsx";

export const AboutMePage = () => {
    const profile = useAppSelector(state => state.auth.profile);
    const user = useAppSelector(state => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
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

    const isChanged = JSON.stringify(watch()) !== JSON.stringify({
        name: profile?.name || "",
        surname: profile?.surname || "",
        email: profile?.email || "",
        phone: profile?.phone || "",
        isAdmin: profile?.isAdmin || false,
    });

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
            reset({
                name: profile?.name || "",
                surname: profile?.surname || "",
                email: profile?.email || "",
                phone: profile?.phone || "",
                isAdmin: profile?.isAdmin || false,
            });
            setEdit(false);
        } else {
            navigate(PATH.HOME);
        }
    };

    return (
        <AboutMeContainer>
            <AboutMeTitle>About Me</AboutMeTitle>

            <AboutMeSection>
                <AboutMeSubTitle>Name</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("name")} />
                            {errors.name && <StyleMeError>{errors.name.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.name}</p>}
                </AboutMeText>

                <AboutMeSubTitle>Surname</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("surname")} />
                            {errors.surname && <StyleMeError>{errors.surname.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.surname}</p>}
                </AboutMeText>
            </AboutMeSection>

            <AboutMeSection>
                <AboutMeSubTitle>Email</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("email")} />
                            {errors.email && <StyleMeError>{errors.email.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.email}</p>}
                </AboutMeText>
            </AboutMeSection>

            <AboutMeSection>
                <AboutMeSubTitle>Phone</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("phone")} />
                            {errors.phone && <StyleMeError>{errors.phone.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.phone}</p>}
                </AboutMeText>
            </AboutMeSection>

            <AboutMeSection>
                <AboutMeSubTitle>Admin</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <Controller
                            name="isAdmin"
                            control={control}
                            render={({ field }) => (
                                <Switch
                                    {...field}
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                />
                            )}
                        />
                    ) : (
                        <p style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            {profile?.isAdmin && <BadgeCheck />} {profile?.isAdmin ? "Yes" : "No"}
                        </p>
                    )}
                </AboutMeText>
            </AboutMeSection>

            <StyledButton disabled={isEdit && !isChanged} onClick={isEdit ? handleSubmit(onSubmit) : () => setEdit(true)}>
                {isEdit ? <Save /> : <Pencil />}
                {isEdit ? "Save" : "Edit"}
            </StyledButton>
            <StyledButton onClick={handleCancelOrHome}>
                {isEdit ? <ArrowLeft /> : <House />}
                {isEdit ? "Back" : "Home"}
            </StyledButton>
        </AboutMeContainer>
    );
};

