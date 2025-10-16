import TabOverview from "@/components/Dashboard/Overview/TabOverview";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.dashboard;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <TabOverview />
    </div>
  );
}
