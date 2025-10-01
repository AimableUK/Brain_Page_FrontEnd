import { z } from "zod"

export const loginSchema = z.object({
    identifier: z
        .string()
        .min(2, { message: "Must be at least 2 characters" })
        .refine(
            (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[a-zA-Z0-9_]+$/.test(val),
            { message: "Must be a valid username or email" }
        ),
    password: z
        .string().
        min(8, { message: "Password must be at least 8 characters" }),
});

export type LoginSchema = z.infer<typeof loginSchema>



export const signUpSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters" })
        .max(50, { message: "Username must be at most 50 characters" }),

    full_name: z
        .string()
        .min(4, { message: "Name must be at least 4 characters" })
        .max(60, { message: "Name must be at most 60 characters" }),

    email: z
        .email({ message: "Invalid email address" }),

    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number must be at most 15 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>
