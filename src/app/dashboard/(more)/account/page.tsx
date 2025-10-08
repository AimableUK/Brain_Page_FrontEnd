import AccountDetails from "@/components/Dashboard/account/AccountDetails";
import OnBoarding from "@/components/Dashboard/account/OnBoarding";
import { SectionCards } from "@/components/Dashboard/account/section-cards";
import PageHeader from "@/components/includes/Dashboard/PageHeader";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.account;

export default function page() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2 mx-4">
      <div className="flex flex-col py-4 gap-3 md:py-6">
        <PageHeader
          title="User Profile"
          subtitle="Manage your personal information and account settings."
          className="mx-0"
        />
        <OnBoarding />
        <div className="flex flex-col md:grid grid-cols-12 gap-3 md:gap-x-3 w-full">
          <AccountDetails />
          <div className="col-span-8 w-full">
            <SectionCards />
          </div>
        </div>
      </div>
    </div>
  );
}
