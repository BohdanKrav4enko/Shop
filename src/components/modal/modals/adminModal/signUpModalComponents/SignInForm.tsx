import {
    StyledSignUpInput,
    InputError,
    StyledButton,
    FormWrapper,
    FormInputWrapper,
} from "@/components";
import type {SignInFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";
import {useTranslation} from "react-i18next";

type Props = {
    errors: FieldErrors<SignInFormData>;
    register: UseFormRegister<SignInFormData>;
};

export const SignInForm = ({errors, register}: Props) => {
    const {t} = useTranslation();
    return (
        <FormWrapper>
            <FormInputWrapper>
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
            <StyledButton type="submit">{t("Sign in")}</StyledButton>
        </FormWrapper>
    );
};