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
  signOut: {
    title: "Sign Out - Brain Page",
    description:
      "Sign out of your Brain Page account to end your current session safely.",
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
};

export const books: Book[] = [
  {
    id: "b1x9k23a",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: true,
    isbn: "9780743273565",
    published_date: "1925-04-10",
    genre: "Fiction",
    language: "English",
    total_copies: "12",
    available_copies: "5",
    created_at: "2025-10-01",
  },
  {
    id: "a7m4n11b",
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    status: true,
    published_date: "1949-06-08",
    genre: "Dystopian",
    language: "English",
    total_copies: "10",
    available_copies: "3",
    created_at: "2025-09-28",
  },
  {
    id: "c9k2v78c",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    status: false,
    published_date: "1960-07-11",
    genre: "Fiction",
    language: "English",
    total_copies: "8",
    available_copies: "2",
    created_at: "2025-10-02",
  },
  {
    id: "d4t8y56d",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    status: false,
    published_date: "1813-01-28",
    genre: "Romance",
    language: "English",
    total_copies: "15",
    available_copies: "10",
    created_at: "2025-10-03",
  },
  {
    id: "e6p3l90e",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "9780316769488",
    status: true,
    published_date: "1951-07-16",
    genre: "Fiction",
    language: "English",
    total_copies: "7",
    available_copies: "4",
    created_at: "2025-10-04",
  },
];


export type Member = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  address: string;
  last_login: string;
  joined_at: string;
};

export const members: Member[] = [
  {
    id: "u1x9a23b",
    full_name: "Aimable Ukobizaba",
    email: "aimable.ukobizaba@example.com",
    phone: "+250781234567",
    address: "Kigali, Rwanda",
    last_login: "2025-10-05",
    joined_at: "2025-09-15",
  },
  {
    id: "u2m4n11c",
    full_name: "Grace Niyonsaba",
    email: "grace.niyonsaba@example.com",
    phone: "+250788654321",
    address: "Musanze, Rwanda",
    last_login: "2025-10-03",
    joined_at: "2025-09-18",
  },
  {
    id: "u3k7v55d",
    full_name: "Jean Claude Habimana",
    email: "jean.habimana@example.com",
    phone: "+250780123456",
    address: "Huye, Rwanda",
    last_login: "2025-10-02",
    joined_at: "2025-09-20",
  },
  {
    id: "u4t8y44e",
    full_name: "Alice Uwase",
    email: "alice.uwase@example.com",
    phone: "+250789876543",
    address: "Rubavu, Rwanda",
    last_login: "2025-09-29",
    joined_at: "2025-09-10",
  },
  {
    id: "u5p3l60f",
    full_name: "Eric Nshimiyimana",
    email: "eric.nshimiyimana@example.com",
    phone: "+250782345678",
    address: "Nyagatare, Rwanda",
    last_login: "2025-10-01",
    joined_at: "2025-09-12",
  },
  {
    id: "u6c2v70g",
    full_name: "Diane Mukamana",
    email: "diane.mukamana@example.com",
    phone: "+250789123654",
    address: "Rusizi, Rwanda",
    last_login: "2025-09-28",
    joined_at: "2025-09-08",
  },
  {
    id: "u7b9k23h",
    full_name: "Patrick Mugisha",
    email: "patrick.mugisha@example.com",
    phone: "+250783456789",
    address: "Karongi, Rwanda",
    last_login: "2025-10-04",
    joined_at: "2025-09-16",
  },
  {
    id: "u8d5r34i",
    full_name: "Sandrine Uwimana",
    email: "sandrine.uwimana@example.com",
    phone: "+250781112233",
    address: "Kayonza, Rwanda",
    last_login: "2025-09-30",
    joined_at: "2025-09-14",
  },
  {
    id: "u9e1j91j",
    full_name: "Kevin Iradukunda",
    email: "kevin.iradukunda@example.com",
    phone: "+250787777777",
    address: "Rwamagana, Rwanda",
    last_login: "2025-10-05",
    joined_at: "2025-09-25",
  },
  {
    id: "u10z8q22k",
    full_name: "Vanessa Ingabire",
    email: "vanessa.ingabire@example.com",
    phone: "+250780998877",
    address: "Gicumbi, Rwanda",
    last_login: "2025-10-03",
    joined_at: "2025-09-22",
  },
  {
    id: "u10z8902k",
    full_name: "Orolle Fiston",
    email: "orolle.fiston@example.com",
    phone: "+250780998927",
    address: "rullido, Rwanda",
    last_login: "2025-10-05",
    joined_at: "2025-09-28",
  },
  {
    id: "u10z8942k",
    full_name: "Gad Irakoze",
    email: "gad.250@example.com",
    phone: "+250780929927",
    address: "bugaragara, Rwanda",
    last_login: "2025-10-02",
    joined_at: "2025-07-16",
  },
  {
    id: "u10z8920k",
    full_name: "Shumbusho yvan",
    email: "Shumbusho.yvan@example.com",
    phone: "+250780990977",
    address: "rwamagama, Rwanda",
    last_login: "2025-10-01",
    joined_at: "2025-08-12",
  },
];

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

export const lendings: LendReturn[] = [
  {
    id: "lr1",
    member_id: "m1",
    book_id: "b1",
    member_name: "Aimable Ukobizaba",
    book_title: "The Great Gatsby",
    Lent_date: "2025-09-25",
    return_date: "2025-10-05",
    overdue_date: "2025-10-06",
    status: "Returned",
  },
  {
    id: "lr2",
    member_id: "m2",
    book_id: "b2",
    member_name: "Grace Niyonsaba",
    book_title: "1984",
    Lent_date: "2025-09-28",
    return_date: "2025-10-08",
    overdue_date: "2025-10-09",
    status: "Returned",
  },
  {
    id: "lr3",
    member_id: "m3",
    book_id: "b3",
    member_name: "Jean Claude Habimana",
    book_title: "To Kill a Mockingbird",
    Lent_date: "2025-09-30",
    return_date: "2025-10-10",
    overdue_date: "2025-10-11",
    status: "Overdue",
  },
  {
    id: "lr4",
    member_id: "m4",
    book_id: "b4",
    member_name: "Alice Uwase",
    book_title: "Pride and Prejudice",
    Lent_date: "2025-10-01",
    return_date: "2025-10-11",
    overdue_date: "2025-10-12",
    status: "Returned",
  },
  {
    id: "lr5",
    member_id: "m5",
    book_id: "b5",
    member_name: "Eric Nshimiyimana",
    book_title: "The Catcher in the Rye",
    Lent_date: "2025-10-02",
    return_date: "2025-10-12",
    overdue_date: "2025-10-13",
    status: "Lent",
  },
  {
    id: "lr6",
    member_id: "m6",
    book_id: "b1",
    member_name: "Diane Mukamana",
    book_title: "The Great Gatsby",
    Lent_date: "2025-10-01",
    return_date: "2025-10-11",
    overdue_date: "2025-10-12",
    status: "Returned",
  },
  {
    id: "lr7",
    member_id: "m7",
    book_id: "b2",
    member_name: "Patrick Mugisha",
    book_title: "1984",
    Lent_date: "2025-10-02",
    return_date: "2025-10-12",
    overdue_date: "2025-10-13",
    status: "Lent",
  },
  {
    id: "lr8",
    member_id: "m8",
    book_id: "b3",
    member_name: "Sandrine Uwimana",
    book_title: "To Kill a Mockingbird",
    Lent_date: "2025-10-03",
    return_date: "2025-10-13",
    overdue_date: "2025-10-14",
    status: "Returned",
  },
  {
    id: "lr9",
    member_id: "m9",
    book_id: "b4",
    member_name: "Kevin Iradukunda",
    book_title: "Pride and Prejudice",
    Lent_date: "2025-10-04",
    return_date: "2025-10-14",
    overdue_date: "2025-10-15",
    status: "Lent",
  },
  {
    id: "lr10",
    member_id: "m10",
    book_id: "b5",
    member_name: "Vanessa Ingabire",
    book_title: "The Catcher in the Rye",
    Lent_date: "2025-10-05",
    return_date: "2025-10-15",
    overdue_date: "2025-10-16",
    status: "Returned",
  },
  {
    id: "lr11",
    member_id: "m11",
    book_id: "b1",
    member_name: "Orolle Fiston",
    book_title: "The Great Gatsby",
    Lent_date: "2025-10-06",
    return_date: "2025-10-16",
    overdue_date: "2025-10-17",
    status: "Lent",
  },
  {
    id: "lr12",
    member_id: "m12",
    book_id: "b2",
    member_name: "Gad Irakoze",
    book_title: "1984",
    Lent_date: "2025-10-07",
    return_date: "2025-10-17",
    overdue_date: "2025-10-18",
    status: "Overdue",
  },
  {
    id: "lr13",
    member_id: "m1",
    book_id: "b3",
    member_name: "Aimable Ukobizaba",
    book_title: "To Kill a Mockingbird",
    Lent_date: "2025-10-08",
    return_date: "2025-10-18",
    overdue_date: "2025-10-19",
    status: "Lent",
  },
  {
    id: "lr14",
    member_id: "m2",
    book_id: "b4",
    member_name: "Grace Niyonsaba",
    book_title: "Pride and Prejudice",
    Lent_date: "2025-10-09",
    return_date: "2025-10-19",
    overdue_date: "2025-10-20",
    status: "Returned",
  },
  {
    id: "lr15",
    member_id: "m3",
    book_id: "b5",
    member_name: "Jean Claude Habimana",
    book_title: "The Catcher in the Rye",
    Lent_date: "2025-10-10",
    return_date: "2025-10-20",
    overdue_date: "2025-10-21",
    status: "Lent",
  },
  {
    id: "lr16",
    member_id: "m4",
    book_id: "b1",
    member_name: "Alice Uwase",
    book_title: "The Great Gatsby",
    Lent_date: "2025-10-11",
    return_date: "2025-10-21",
    overdue_date: "2025-10-22",
    status: "Returned",
  },
];
