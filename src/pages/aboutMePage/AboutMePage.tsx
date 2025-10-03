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
import {ArrowLeft, BadgeCheck, House, Pencil, Save} from "lucide-react";
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
        handleCancelOrHome
    } = useAboutMe();

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
                            render={({field}) => (
                                <Switch sx={{
                                    '& .Mui-checked': {
                                        color: '#888',
                                    },
                                    '& .Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: '#ccc',
                                    },
                                    '& .MuiSwitch-track': {
                                        backgroundColor: '#eee'
                                    }
                                }} {...field} checked={field.value}
                                        onChange={e =>
                                            field.onChange(e.target.checked)}/>
                            )}
                        />
                    ) : (
                        <p style={{display: "flex", alignItems: "center", gap: 10}}>
                            {profile?.isAdmin && <BadgeCheck/>} {profile?.isAdmin ? "Yes" : "No"}
                        </p>
                    )}
                </AboutMeText>
            </AboutMeSection>

            <StyledButton disabled={isEdit && !isChanged}
                          onClick={isEdit ? handleSubmit(onSubmit) : () => setEdit(true)}>
                {isEdit ? <Save/> : <Pencil/>}
                {isEdit ? "Save" : "Edit"}
            </StyledButton>

            <StyledButton onClick={handleCancelOrHome}>
                {isEdit ? <ArrowLeft/> : <House/>}
                {isEdit ? "Back" : "Home"}
            </StyledButton>
        </AboutMeContainer>
    );
};
