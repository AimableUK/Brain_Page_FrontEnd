"use client";

import * as React from "react";
import {
  HelpCircleIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  LibraryBig,
  Users,
  RefreshCcwDot,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/Dashboard/Overview/nav-main";
import { NavSecondary } from "@/components/Dashboard/Overview/nav-secondary";
import { NavUser } from "@/components/Dashboard/Overview/nav-user";
import Image from "next/image";
import Link from "next/link";

const data = {
  user: {
    name: "aimableuk",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "overview",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Books",
      url: "books",
      icon: LibraryBig,
    },
    {
      title: "Users",
      url: "users",
      icon: Users,
    },
    {
      title: "Lending & Returns",
      url: "lend-and-return",
      icon: RefreshCcwDot,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "settings",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "help",
      icon: HelpCircleIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard/overview">
                <Image
                  src="/BrainPage.png"
                  alt="Brain Page logo"
                  width={30}
                  height={30}
                />
                <span className="text-base font-semibold">Brain Page</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
