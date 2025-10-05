"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbNameMap: Record<string, string> = {
  "/dashboard/overview": "Overview",
  "/dashboard/books": "Book Catalog",
  "/dashboard/members": "Members",
  "/dashboard/lend-and-return": "Lending & Return",
  "/dashboard/settings": "Settings",
  "/dashboard/help": "Help",
  "/dashboard/account": "Account",
  "/dashboard/notifications": "Notifications",
};

export function DashboardBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  let accumulatedPath = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          accumulatedPath += `/${segment}`;
          const isLast = index === segments.length - 1;
          const label = breadcrumbNameMap[accumulatedPath] || segment;

          return (
            <React.Fragment key={accumulatedPath}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={accumulatedPath}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
