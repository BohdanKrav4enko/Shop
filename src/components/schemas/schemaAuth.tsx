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
    phone: z.string()
        .regex(/^\+?\d{10,12}$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, "Password must be at least 8 characters"),
});
export const editSchema = z.object({
    name: z.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name is too long")
        .regex(/^[A-Za-zА-Яа-яЁё'-]+$/, "Name can only contain letters"),
    surname: z.string()
        .min(2, "Surname must be at least 2 characters")
        .max(50, "Surname is too long")
        .regex(/^[A-Za-zА-Яа-яЁё'-]+$/, "Surname can only contain letters"),
    phone: z.string()
        .regex(/^\+?\d{10,12}$/, "Invalid phone number"),
    email: z.string().email("Invalid email"),
    isAdmin: z.boolean()
});

export const signInSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string()
        .min(8, "Password must be at least 8 characters"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type EditFormData = z.infer<typeof editSchema>;
