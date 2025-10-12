import TabLendReturn from "@/components/Dashboard/lend-and-return/TabLendReturn";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.lendingReturn;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <TabLendReturn />
    </div>
  );
}
