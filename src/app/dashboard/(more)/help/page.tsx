import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.help;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <PageHeader
          title="Get Help"
          subtitle="Find answers, guides, and tips to use Brain Page Library effectively."
        />

        <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
      </div>
    </div>
  );
}
