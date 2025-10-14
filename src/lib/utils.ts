import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const metadata = {
  landing: {
    title: "Brain Page - Library Management System",
    description:
      "Brain Page is a modern library management system to manage books, users, lending, and returns efficiently.",
  },
  signIn: {
    title: "Sign In - Brain Page",
    description:
      "Sign in to your Brain Page Library account to manage books, users, and borrowers securely.",
  },
  signUp: {
    title: "Sign Up - Brain Page",
    description:
      "Create a Brain Page account to access and manage books, lending, returns, and user activity.",
  },
  emailConfirm: {
    title: "Confirm Email - Brain Page",
    description:
      "Confirm your email to activate your Brain Page Account",
  },
  signOut: {
    title: "Sign Out - Brain Page",
    description:
      "Sign out of your Brain Page account to end your current session safely.",
  },
  changePassword: {
    title: "Change Password - Brain Page",
    description:
      "Change your Brain Page account password to increase your account security.",
  },
  forgotPassword: {
    title: "Forgot Password - Brain Page",
    description:
      "Set a new Brain Page account password to if you forgot it.",
  },
  resetPassword: {
    title: "Reset Password - Brain Page",
    description:
      "Reset your Brain Page account password to renew it.",
  },
  dashboard: {
    title: "Dashboard - Brain Page",
    description:
      "View key insights and manage your Brain Page Library system with an overview of books, users, and recent activities.",
  },
  books: {
    title: "Books - Brain Page",
    description:
      "Browse, add, and manage all books in the Brain Page Library collection, including availability and lending status.",
  },
  users: {
    title: "Members - Brain Page",
    description:
      "Manage library members, track activity, view last logins, and oversee borrowers in Brain Page Library.",
  },
  lendingReturn: {
    title: "Lending & Return - Brain Page",
    description:
      "Track Lent books, manage returns, monitor overdue items, and streamline lending operations in Brain Page Library.",
  },
  settings: {
    title: "Settings - Brain Page",
    description:
      "Customize your Brain Page Library preferences, system configurations, and account options.",
  },
  help: {
    title: "Help - Brain Page",
    description:
      "Find answers to common questions, explore guides, and get support for using Brain Page Library effectively.",
  },
  account: {
    title: "Account - Brain Page",
    description:
      "Manage your Brain Page Library account details, update profile information, and adjust security settings.",
  },
  notifications: {
    title: "Notifications - Brain Page",
    description:
      "Stay updated with the latest alerts, lending reminders, and important updates from Brain Page Library.",
  },
};

export const breadcrumbNameMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/books": "Books",
  "/dashboard/members": "Members",
  "/dashboard/lending-return": "Lending & Return",
  "/dashboard/settings": "Settings",
  "/dashboard/help": "Help",
  "/dashboard/account": "Account",
  "/dashboard/notifications": "Notifications",
};

export type Book = {
  id: string;
  title: string;
  author: string;
  status: boolean;
  isbn: string;
  published_date: string;
  genre: string;
  language: string;
  total_copies: string;
  available_copies: string;
  created_at: string;
  is_overdue?: boolean;
};

export type Member = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  last_login: string;
  joined_at: string;
};


export type LendReturn = {
  id: string;
  member_id: string;
  book_id: string;
  member_name: string;
  book_title: string;
  Lent_date: string;
  return_date: string;
  overdue_date: string;
  status: string;
}
