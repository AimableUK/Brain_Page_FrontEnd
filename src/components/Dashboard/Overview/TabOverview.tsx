"use client";

import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { useEffect, useState } from "react";
import { SectionCards } from "./section-cards";
import { ChartAreaInteractive } from "./chart-area-interactive";
import { Book, LendReturn, Member } from "@/lib/utils";
import axiosInstance from "@/hooks/axiosInstance";
import axios from "axios";

interface MembersResponse {
  members: Member[];
  stats: {
    total_members: number;
    members_with_books: number;
  };
}

const TabOverview = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [lends, setLends] = useState<LendReturn[]>([]);

  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<MembersResponse["stats"]>({
    total_members: 0,
    members_with_books: 0,
  });

  const fetchBooksMembersLends = async () => {
    try {
      setFetchError(null);
      setLoading(true);

      const booksList = "books/";
      const membersList = "members/";
      const lendsList = "lends/";

      const promise = Promise.all([
        axiosInstance.get(booksList),
        axiosInstance.get(membersList),
        axiosInstance.get(lendsList),
      ]);

      const [booksResponse, membersResponse, lendsResponse] = await promise;

      setBooks(booksResponse.data || []);
      setMembers(membersResponse.data.members || []);
      setLends(lendsResponse.data.lends || []);
      setStats(
        membersResponse.data.stats || {
          total_members: 0,
          members_with_books: 0,
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFetchError(
          error.response?.data?.detail || "Failed to load. Try Again."
        );
      } else {
        setFetchError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!books.length || !members.length || !lends.length) {
      fetchBooksMembersLends();
    }
  }, [books.length, lends.length, members.length]);

  const totalBooks = books.reduce(
    (sum, book) => sum + Number(book.total_copies),
    0
  );
  const availableBooks = books.reduce(
    (sum, book) => sum + Number(book.available_copies || 0),
    0
  );
  console.log(books);
  console.log(members);
  console.log(lends);

  const formatDate = (isoString?: string) => isoString?.split("T")[0] ?? "";

  const booksByDate: Record<string, number> = {};
  books.forEach((book) => {
    const date = formatDate(book.created_at);
    if (!date) return;
    booksByDate[date] = (booksByDate[date] || 0) + 1;
  });

  const membersByDate: Record<string, number> = {};
  members.forEach((member) => {
    const date = formatDate(member.created_at);
    if (!date) return;
    membersByDate[date] = (membersByDate[date] || 0) + 1;
  });

  const lendsByDate: Record<string, number> = {};
  lends.forEach((lend) => {
    const date = formatDate(lend.lent_date);
    if (!date) return;
    lendsByDate[date] = (lendsByDate[date] || 0) + 1;
  });

  const allDates = Array.from(
    new Set([
      ...Object.keys(booksByDate),
      ...Object.keys(membersByDate),
      ...Object.keys(lendsByDate),
    ])
  ).sort();

  const chartData = allDates.map((date) => ({
    date,
    books: booksByDate[date] || 0,
    members: membersByDate[date] || 0,
    lends: lendsByDate[date] || 0,
  }));

  console.log(chartData);

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <PageHeader
        title="Library Overview"
        subtitle="Quick insights on books, users, and lending activity."
      />

      <SectionCards
        loading={loading}
        totalBooks={totalBooks}
        availableBooks={availableBooks}
        totalMembers={stats.total_members}
        membersWithBooks={stats.members_with_books}
      />

      <div className="px-4 lg:px-6">
        <ChartAreaInteractive loading={loading} chartData={chartData} />
      </div>
    </div>
  );
};

export default TabOverview;
