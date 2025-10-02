import { StyledSignUpInput, InputError, StyledButton } from "@/components";
import type {SignInFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";

type Props = {
    errors: FieldErrors<SignInFormData>;
    register: UseFormRegister<SignInFormData>;
};

export const SignInForm = ({ errors, register }: Props) => {
    return (
        <>
            <StyledSignUpInput {...register("email")} type="email" placeholder="Email" hasError={!!errors.email} />
            {errors.email && <InputError>{errors.email.message}</InputError>}

            <StyledSignUpInput {...register("password")} type="password" placeholder="Password" hasError={!!errors.password} />
            {errors.password && <InputError>{errors.password.message}</InputError>}

            <StyledButton type="submit">Sign in</StyledButton>
        </>
    );
};
