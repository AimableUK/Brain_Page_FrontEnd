"use client";

import PageHeader from "@/components/includes/Dashboard/PageHeader";
import LendReturnTable from "./LendReturnTable";
import { SectionCards } from "./section-cards";
import { useEffect, useState } from "react";
import { LendReturn } from "@/lib/utils";
import axios from "axios";

const TabLendReturn = () => {
  const [loading, setLoading] = useState(true);
  const [lendings, setLendings] = useState<LendReturn[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchLendings = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/v1/lends/", {
        headers: { "Content-Type": "application/json" },
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedData = response.data.map((lend: any) => ({
        id: lend.id,
        lent_date: new Date(lend.lent_date).toISOString().split("T")[0],
        return_date: lend.return_date,
        overdue_date: lend.return_date,
        status: lend.status ? "Returned" : lend.is_overdue ? "Overdue" : "Lent",
        book_title: lend.book.title,
        member_name: lend.member.full_name,
        book_id: lend.book.id,
        member_id: lend.member.id,
      }));

      setLendings(mappedData);
    } catch (error) {
      console.error(error);
      setFetchError("Failed to fetch lendings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLendings();
  }, []);

  const totalLendings = lendings.length;
  const lentOut = lendings.filter((lend) => lend.status === "Lent").length;
  const returnedLends = lendings.filter(
    (lend) => lend.status === "Returned"
  ).length;
  const overdue = lendings.filter((lend) => lend.status === "Overdue").length;

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <PageHeader
        title="Lending & Return"
        subtitle="Track book Returns, Loans, Overdue and manage lending records."
      />

      <SectionCards
        loading={loading}
        totalLendings={totalLendings}
        lentOut={lentOut}
        returnedLends={returnedLends}
        overdue={overdue}
      />
      <div className="px-4 lg:px-6">
        <LendReturnTable
          loading={loading}
          setLoading={setLoading}
          lendings={lendings}
          fetchError={fetchError}
          fetchLendings={fetchLendings}
        />
      </div>
    </div>
  );
};

export default TabLendReturn;
