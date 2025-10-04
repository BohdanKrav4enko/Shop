import {StyledSignUpInput, InputError, StyledButton, FormWrapper, FormInputWrapper} from "@/components";
import type {SignUpFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";
import {useTranslation} from "react-i18next";

type Props = {
    errors: FieldErrors<SignUpFormData>;
    register: UseFormRegister<SignUpFormData>;
};

export const SignUpForm = ({errors, register}: Props) => {
    const {t} = useTranslation();
    return (
        <FormWrapper>
            <FormInputWrapper>
                <label htmlFor="name">{t("Name")}</label>
                <StyledSignUpInput
                    id="name"
                    {...register("name")}
                    placeholder={t("Name")}
                    hasError={!!errors.name}
                />
                {errors.name && <InputError>{t(errors.name.message || "")}</InputError>}

                <label htmlFor="surname">{t("Surname")}</label>
                <StyledSignUpInput
                    id="surname"
                    {...register("surname")}
                    placeholder={t("Surname")}
                    hasError={!!errors.surname}
                />
                {errors.surname && <InputError>{t(errors.surname.message || "")}</InputError>}

                <label htmlFor="phone">{t("Phone")}</label>
                <StyledSignUpInput
                    id="phone"
                    {...register("phone")}
                    type="tel"
                    placeholder={t("Phone")}
                    hasError={!!errors.phone}
                />
                {errors.phone && <InputError>{t(errors.phone.message || "")}</InputError>}

                <label htmlFor="email">{t("Email")}</label>
                <StyledSignUpInput
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder={t("Email")}
                    hasError={!!errors.email}
                />
                {errors.email && <InputError>{t(errors.email.message || "")}</InputError>}

                <label htmlFor="password">{t("Password")}</label>
                <StyledSignUpInput
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder={t("Password")}
                    hasError={!!errors.password}
                />
                {errors.password && <InputError>{t(errors.password.message || "")}</InputError>}
            </FormInputWrapper>
            <StyledButton type="submit">{t("Sign up")}</StyledButton>
        </FormWrapper>
    );
};