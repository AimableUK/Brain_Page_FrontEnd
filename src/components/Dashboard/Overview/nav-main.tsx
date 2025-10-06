"use client";

import {
  ArrowBigDownDash,
  ArrowBigUpDash,
  Bell,
  BookOpen,
  PlusCircleIcon,
  Rabbit,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  tooltip="Instant Add"
                  className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                >
                  <PlusCircleIcon />
                  <span>Instant Add</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="flex items-center gap-x-1">
                  <Rabbit size={17} />
                  Quick Actions
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <BookOpen />
                  Add Book
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus />
                  Add Member
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowBigUpDash />
                  Create Lending
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ArrowBigDownDash />
                  Create Return
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/dashboard/notifications">
              <Button
                size="icon"
                className={`h-9 border w-9 shrink-0 group-data-[collapsible=icon]:opacity-0 ${
                  pathName === "/dashboard/notifications" ? "border-accent bg-secondary" : ""
                }`}
                variant="outline"
              >
                <Bell />
                <span className="sr-only">Notifications</span>
              </Button>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url}>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={
                    pathName === "/dashboard/" + item.url
                      ? "bg-secondary border border-accent"
                      : "border border-background"
                  }
                >
                  {item.icon && <item.icon className="text-accent" />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
