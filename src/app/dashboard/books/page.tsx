import TabBooks from "@/components/Dashboard/books/TabBooks";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.books;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <TabBooks />
    </div>
  );
}
