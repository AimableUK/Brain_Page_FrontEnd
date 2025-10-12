"use client";

import PageHeader from "@/components/includes/Dashboard/PageHeader";
import React, { useEffect, useState } from "react";
import { SectionCards } from "./section-cards";
import MembersTable from "./MembersTable";
import { Member } from "@/lib/utils";
import axios from "axios";

interface MembersResponse {
  members: Member[];
  stats: {
    total_members: number;
    members_with_books: number;
    members_overdue: number;
    new_members: number;
  };
}

const TabMembers = () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState<Member[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [stats, setStats] = useState<MembersResponse["stats"]>({
    total_members: 0,
    members_with_books: 0,
    members_overdue: 0,
    new_members: 0,
  });

  const fetchMembers = async () => {
    try {
      setFetchError(null);
      setLoading(true);

      const response = await axios.get<MembersResponse>(
        "http://127.0.0.1:8000/api/v1/members/",
        { headers: { "Content-Type": "application/json" } }
      );

      setMembers(response.data.members || []);
      setStats(
        response.data.stats || {
          total_members: 0,
          members_with_books: 0,
          members_overdue: 0,
          new_members: 0,
        }
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFetchError(
          error.response?.data?.detail || "Failed to load members."
        );
      } else {
        setFetchError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <PageHeader
        title="Library Members"
        subtitle="View and manage all registered users."
      />
      <SectionCards
        loading={loading}
        totalMembers={stats.total_members}
        membersWithBooks={stats.members_with_books}
        membersOverdue={stats.members_overdue}
        newMembers={stats.new_members}
      />
      <div className="px-4 lg:px-6">
        <MembersTable
          loading={loading}
          members={members}
          fetchError={fetchError}
          fetchMembers={fetchMembers}
        />
      </div>
    </div>
  );
};

export default TabMembers;
