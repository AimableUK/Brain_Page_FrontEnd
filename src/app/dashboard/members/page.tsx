import TabMembers from "@/components/Dashboard/members/TabMembers";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.users;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
      <TabMembers />
    </div>
  );
}
