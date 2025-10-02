import { z } from "zod";

export const signUpSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name is too long")
        .regex(/^[A-Za-zА-Яа-яЁё'-]+$/, "Name can only contain letters"),
    surname: z.string()
        .min(2, "Surname must be at least 2 characters")
        .max(50, "Surname is too long")
        .regex(/^[A-Za-zА-Яа-яЁё'-]+$/, "Surname can only contain letters"),
    date: z.string()
        .refine((val) => !!val && !isNaN(Date.parse(val)), { message: "Invalid date" })
        .refine((val) => {
            const birthDate = new Date(val);
            const ageDiff = new Date().getFullYear() - birthDate.getFullYear();
            return ageDiff >= 13;
        }, { message: "You must be at least 13 years old" }),
    phone: z.string()
        .regex(/^\+?\d{10,12}$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, "Password must be at least 8 characters"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
