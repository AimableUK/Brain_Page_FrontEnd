import { ChartAreaInteractive } from "@/components/Dashboard/Overview/chart-area-interactive";
import { SectionCards } from "@/components/Dashboard/Overview/section-cards";
import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.dashboard;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <PageHeader
          title="Library Overview"
          subtitle="Quick insights on books, users, and lending activity."
        />
        
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  );
}
