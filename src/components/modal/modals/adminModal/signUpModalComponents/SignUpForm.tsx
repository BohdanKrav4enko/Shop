import {StyledSignUpInput, InputError, StyledButton, FormWrapper, FormInputWrapper} from "@/components";
import type {SignUpFormData} from "@/components/schemas/schemaAuth.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";

type Props = {
    errors: FieldErrors<SignUpFormData>;
    register: UseFormRegister<SignUpFormData>;
};

export const SignUpForm = ({errors, register}: Props) => {
    return (
        <FormWrapper>
            <FormInputWrapper>
                <label htmlFor="name">Name</label>
                <StyledSignUpInput
                    id="name"
                    {...register("name")}
                    placeholder="Name"
                    hasError={!!errors.name}
                />
                {errors.name && <InputError>{errors.name.message}</InputError>}

                <label htmlFor="surname">Surname</label>
                <StyledSignUpInput
                    id="surname"
                    {...register("surname")}
                    placeholder="Surname"
                    hasError={!!errors.surname}
                />
                {errors.surname && <InputError>{errors.surname.message}</InputError>}

                <label htmlFor="phone">Phone</label>
                <StyledSignUpInput
                    id="phone"
                    {...register("phone")}
                    type="tel"
                    placeholder="Phone"
                    hasError={!!errors.phone}
                />
                {errors.phone && <InputError>{errors.phone.message}</InputError>}

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
            <StyledButton type="submit">Sign up</StyledButton>
        </FormWrapper>
    );
};
