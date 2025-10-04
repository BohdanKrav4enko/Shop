import {
    AboutMeContainer,
    AboutMeInput,
    AboutMeSection,
    AboutMeSubTitle,
    AboutMeText,
    AboutMeTitle,
    StyleMeError
} from "./index.ts";
import {StyledButton, useAboutMe} from "@/components";
import {ArrowLeft, BadgeCheck, House, LogOut, Pencil, Save} from "lucide-react";
import {Switch} from "@mui/material";
import {Controller} from "react-hook-form";

export const AboutMePage = () => {

    const {
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
        logoutHandler,
        t
    } = useAboutMe();

    return (
        <AboutMeContainer>
            <AboutMeTitle>{t("About Me")}</AboutMeTitle>

            <AboutMeSection>
                <AboutMeSubTitle>{t("Name")}</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("name")} />
                            {errors.name && <StyleMeError>{errors.name.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.name}</p>}
                </AboutMeText>

                <AboutMeSubTitle>{t("Surname")}</AboutMeSubTitle>
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
                <AboutMeSubTitle>{t("Email")}</AboutMeSubTitle>
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
                <AboutMeSubTitle>{t("Phone")}</AboutMeSubTitle>
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
                <AboutMeSubTitle>{t("Admin")}</AboutMeSubTitle>
                <AboutMeText>
                    {isEdit ? (
                        <Controller
                            name="isAdmin"
                            control={control}
                            render={({field}) => (
                                <Switch
                                    {...field}
                                    checked={field.value}
                                    onChange={e => field.onChange(e.target.checked)}
                                    sx={{
                                        '& .MuiSwitch-switchBase.Mui-checked': {
                                            color: 'rgb(104,104,104)',
                                            '& + .MuiSwitch-track': {
                                                backgroundColor: 'rgb(0,0,0)',
                                            },
                                        },
                                        '& .MuiSwitch-track': {
                                            backgroundColor: '#1b1b19',
                                        },
                                    }}
                                />

                            )}
                        />
                    ) : (
                        <p style={{display: "flex", alignItems: "center", gap: 10}}>
                            {profile?.isAdmin && <BadgeCheck/>} {profile?.isAdmin ? t("Yes") : t("No")}
                        </p>
                    )}
                </AboutMeText>
            </AboutMeSection>

            <StyledButton disabled={isEdit && !isChanged} onClick={isEdit ? handleSubmit(onSubmit) : () => setEdit(true)}>
                {isEdit ? <Save/> : <Pencil/>} {isEdit ? t("Save") : t("Edit")}
            </StyledButton>
            <StyledButton onClick={handleCancelOrHome}>
                {isEdit ? <ArrowLeft/> : <House/>} {isEdit ? t("Back") : t("Home")}
            </StyledButton>
            <StyledButton onClick={logoutHandler}><LogOut />{t("Logout")}</StyledButton>
        </AboutMeContainer>
    );
};
