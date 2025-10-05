import LendReturnTable from "@/components/Dashboard/lend-and-return/LendReturnTable";
import { SectionCards } from "@/components/Dashboard/lend-and-return/section-cards";
import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.lendingReturn;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <PageHeader
          title="Lending & Return"
          subtitle="Track book Returns, Loans, Overdue and manage lending records."
        />

        <SectionCards />
        <div className="px-4 lg:px-6">
          <LendReturnTable />
        </div>
      </div>
    </div>
  );
}
