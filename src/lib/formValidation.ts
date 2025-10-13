import { literal, z, ZodNumber } from "zod"

export const loginSchema = z.object({
    username: z
        .string({ message: "Username required" }),

    password: z
        .string({ message: "Password required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>


export const signUpSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters" })
        .max(50, { message: "Username must be at most 50 characters" }),

    email: z
        .email({ message: "Invalid email address" }),

    password1: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),

    password2: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
}).refine((data) => data.password1 === data.password2, {
    message: "Passwords must match",
    path: ["password2"],
});

export type SignUpSchema = z.infer<typeof signUpSchema>


export const memberSchema = z.object({
    full_name: z
        .string()
        .min(3, { message: "full name must be at least 4 characters" })
        .max(50, { message: "full name must not exceed 50 characters" }),

    email: z
        .email({ message: "Email is required" }).or(literal('')),

    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number must be at most 15 digits" })
        .regex(/^\+?\d+$/, { message: "Phone number must contain only digits" }).or(literal('')),

    address: z
        .string()
        .min(2, { message: " address must be at least 2 characters long" })
        .max(50, { message: "address msut not exceed 50 characters" })
})

export type MemberSchema = z.infer<typeof memberSchema>


export const bookSchema = z.object({
    title: z
        .string()
        .min(2, { message: "title must be at least 2 characters" })
        .max(50, { message: "title must be at most 50 characters" }),

    author: z
        .string()
        .min(2, { message: "author must be at least 2 characters" })
        .max(100, { message: "author(s) must be at most 50 characters" }),

    isbn: z
        .string()
        .min(10, { message: "ISBN must be 10 characters (Only for Books published before dec, 2006)" })
        .max(13, { message: "ISBN must be at most 13 digits (Only for Books published after dec, 2006)" }),

    published_date: z.date({ message: "published date is required" }),

    genre: z
        .string()
        .min(3, { message: "Genre must be at least 3 characters" })
        .max(15, { message: "Genre must be at most 15 characters" }),

    language: z
        .string()
        .min(3, { message: "Language must be at least 3 characters" })
        .max(15, { message: "Language must be at most 15 characters" }),

    total_copies: z.coerce
        .number()
        .refine((n) => !isNaN(n), {
            message: "Please enter a valid number for total_copies",
        }) as ZodNumber,

})

export type BookSchema = z.infer<typeof bookSchema>


export const returnSchema = z.object({
    member_id: z.string().min(1, { message: "Please enter a valid member ID" })
})

export type ReturnSchema = z.infer<typeof returnSchema>


export const lendSchema = z.object({
    member: z.number({ message: "Member is required" }),
    book: z.number({ message: "Book is required" }),
    lent_date: z.string().optional(),
    return_date: z.date({ message: "Return date is required" }),
});


export type LendSchema = z.infer<typeof lendSchema>
