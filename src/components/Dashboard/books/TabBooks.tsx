"use client";

import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { SectionCards } from "./section-cards";
import { useEffect, useState } from "react";
import { Book } from "@/lib/utils";
import axios from "axios";
import BooksTable from "./BooksTable";
import axiosInstance from "@/hooks/axiosInstance";
import useAuthGuard from "@/hooks/useAuthGuard";

const TabBooks = () => {
  useAuthGuard();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setFetchError(null);
      const response = await axiosInstance.get("books/");
      console.log("Fetching books from:", process.env.NEXT_PUBLIC_BACKEND_API);

      if (Array.isArray(response.data)) {
        setBooks(response?.data || []);
      } else {
        setBooks([]);
        setFetchError(
          typeof response.data.detail === "string"
            ? response.data.detail
            : "Failed to load books."
        );
      }
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFetchError(error.response?.data?.detail || "Failed to load books.");
      } else {
        setFetchError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();

    const interval = setInterval(() => {
      fetchBooks();
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const totalBooks = books.reduce(
    (sum, book) => sum + Number(book.total_copies),
    0
  );
  const availableBooks = books.reduce(
    (sum, book) => sum + Number(book.available_copies || 0),
    0
  );
  const lentBooks = books.reduce(
    (sum, book) =>
      sum + (Number(book.total_copies) - Number(book.available_copies || 0)),
    0
  );
  const overDueBooks = books.reduce(
    (sum, book) => sum + Number(book.is_overdue),
    0
  );

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <PageHeader
        title="Book Catalog"
        subtitle="Manage all books in your library efficiently."
      />

      <SectionCards
        loading={loading}
        totalBooks={totalBooks}
        availableBooks={availableBooks}
        lentBooks={lentBooks}
        overDueBooks={overDueBooks}
      />
      <div className="px-4 lg:px-6">
        <BooksTable
          loading={loading}
          books={books}
          fetchError={fetchError}
          fetchBooks={fetchBooks}
        />
      </div>
    </div>
  );
};

export default TabBooks;
