import {
    StyledSignUpInput,
    InputError,
    StyledButton,
    FormWrapper,
    FormInputWrapper,
} from "@/components";
import type {SignInFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";

type Props = {
    errors: FieldErrors<SignInFormData>;
    register: UseFormRegister<SignInFormData>;
};

export const SignInForm = ({errors, register}: Props) => {
    return (
        <FormWrapper>
            <FormInputWrapper>
                <label htmlFor="email">Email</label>
                <StyledSignUpInput
                    id="email"
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    hasError={!!errors.email}
                />
                {errors.email && <InputError>{errors.email.message}</InputError>}

                <label htmlFor="password">Password</label>
                <StyledSignUpInput
                    id="password"
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    hasError={!!errors.password}
                />
                {errors.password && <InputError>{errors.password.message}</InputError>}
            </FormInputWrapper>
            <StyledButton type="submit">Sign in</StyledButton>
        </FormWrapper>
    );
};
