import { StyledSignUpInput, InputError, StyledButton } from "@/components";
import type { SignUpFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";

type Props = {
    errors: FieldErrors<SignUpFormData>;
    register: UseFormRegister<SignUpFormData>;
};

export const SignUpForm = ({  errors, register }: Props) => {
    return (
        <>
            <StyledSignUpInput {...register("name")} placeholder="Name" hasError={!!errors.name} />
            {errors.name && <InputError>{errors.name.message}</InputError>}

            <StyledSignUpInput {...register("surname")} placeholder="Surname" hasError={!!errors.surname} />
            {errors.surname && <InputError>{errors.surname.message}</InputError>}

            <StyledSignUpInput {...register("date")} type="date" placeholder="Date" hasError={!!errors.date} />
            {errors.date && <InputError>{errors.date.message}</InputError>}

            <StyledSignUpInput {...register("phone")} type="tel" placeholder="Phone" hasError={!!errors.phone} />
            {errors.phone && <InputError>{errors.phone.message}</InputError>}

            <StyledSignUpInput {...register("email")} type="email" placeholder="Email" hasError={!!errors.email} />
            {errors.email && <InputError>{errors.email.message}</InputError>}

            <StyledSignUpInput {...register("password")} type="password" placeholder="Password" hasError={!!errors.password} />
            {errors.password && <InputError>{errors.password.message}</InputError>}

            <StyledButton type="submit">Sign up</StyledButton>
        </>
    );
};
