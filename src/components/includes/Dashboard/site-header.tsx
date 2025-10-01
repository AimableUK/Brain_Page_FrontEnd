import { DashboardBreadcrumb } from "@/components/Dashboard/Overview/dashboard-bread-crumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "../Theme/ModeToggle";

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex flex-row justify-between w-full items-center">
          <DashboardBreadcrumb />
          <div className="flex flex-row items-center gap-3 ">
            <p>
              {new Date().toLocaleString("en-GB", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
