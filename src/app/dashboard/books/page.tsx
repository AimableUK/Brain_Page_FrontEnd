import { SectionCards } from "@/components/Dashboard/books/section-cards";
import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { DataTable } from "@/components/Table/dataTable";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.books;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <PageHeader
          title="Book Catalog"
          subtitle="Manage all books in your library efficiently."
        />

        <SectionCards />
        <div className="px-4 lg:px-6">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
