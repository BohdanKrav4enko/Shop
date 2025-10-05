import {AboutMeInput, ProfileLogOutButton, StyleMeError} from "./index.ts";
import {StyledButton, useAboutMe} from "@/components";
import {ArrowLeft, BadgeCheck, House, LogOut, Pencil, Save} from "lucide-react";
import {Switch} from "@mui/material";
import {Controller} from "react-hook-form";
import {PageContainer, PageSection, PageSubTitle, PageText, PageTitle} from "@/pages";

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
        <PageContainer>
            <PageTitle>{t("About Me")}</PageTitle>

            <PageSection>
                <PageSubTitle>{t("Name")}</PageSubTitle>
                <PageText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("name")} />
                            {errors.name && <StyleMeError>{errors.name.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.name}</p>}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Surname")}</PageSubTitle>
                <PageText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("surname")} />
                            {errors.surname && <StyleMeError>{errors.surname.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.surname}</p>}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Email")}</PageSubTitle>
                <PageText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("email")} />
                            {errors.email && <StyleMeError>{errors.email.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.email}</p>}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Phone")}</PageSubTitle>
                <PageText>
                    {isEdit ? (
                        <>
                            <AboutMeInput {...register("phone")} />
                            {errors.phone && <StyleMeError>{errors.phone.message}</StyleMeError>}
                        </>
                    ) : <p>{profile?.phone}</p>}
                </PageText>
            </PageSection>

            <PageSection>
                <PageSubTitle>{t("Admin")}</PageSubTitle>
                <PageText>
                    {isEdit ? (
                        <Controller
                            name="isAdmin"
                            control={control}
                            render={({field}) => (
                                <Switch{...field} checked={field.value}
                                       onChange={e => field.onChange(e.target.checked)}
                                       sx={{
                                           '& .MuiSwitch-switchBase.Mui-checked': {
                                               color: 'rgb(104,104,104)',
                                               '& + .MuiSwitch-track': {
                                                   backgroundColor: 'rgb(81,76,76)',
                                               },
                                           },
                                           '& .MuiSwitch-track': {
                                               backgroundColor: '#818176',
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
                </PageText>
            </PageSection>
            <StyledButton disabled={isEdit && !isChanged}
                          onClick={isEdit ? handleSubmit(onSubmit) : () => setEdit(true)}>
                {isEdit ? <Save/> : <Pencil/>} {isEdit ? t("Save") : t("Edit")}
            </StyledButton>
            <StyledButton onClick={handleCancelOrHome}>
                {isEdit ? <ArrowLeft/> : <House/>} {isEdit ? t("Back") : t("Home")}
            </StyledButton>
            <ProfileLogOutButton onClick={logoutHandler}><LogOut/>{t("Logout")}</ProfileLogOutButton>
        </PageContainer>
    );
};
