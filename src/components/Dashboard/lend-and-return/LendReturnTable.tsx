"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowUpDown,
  CircleCheckBig,
  Clock4,
  Eye,
  MoreHorizontal,
  TimerReset,
} from "lucide-react";
import { lendings, LendReturn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/Table/dataTable";

export const columns: ColumnDef<LendReturn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <div className="flex items-center gap-2 lowercase">
          {status && (
            <div className="border border-secondary gap-2 p-1 px-2 text-sm flex flex-row rounded-lg items-center">
              {status === "Returned" && (
                <CircleCheckBig className="text-green-400" size={17} />
              )}
              {status === "Lent" && <TimerReset className="" size={17} />}
              {status === "Overdue" && (
                <Clock4 className="text-red-500" size={17} />
              )}
              <span>{status.toLowerCase()}</span>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "book_title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Book Title
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("book_title")}</div>
    ),
  },
  {
    accessorKey: "member_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Member Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("member_name")}</div>
    ),
  },
  {
    accessorKey: "Lent_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lent At
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("Lent_date")}</div>
    ),
  },
  {
    accessorKey: "return_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Returned At
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("return_date")}</div>
    ),
  },
  {
    accessorKey: "overdue_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Due Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("overdue_date")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "actions",
    cell: ({ row }) => {
      const book = row.original;

      const pendingLendings = lendings.filter(
        (lending) => lending.id === book.id && lending.status !== "Returned"
      );

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Eye />
              View Book
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Eye />
              View Member
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            {pendingLendings.length > 0 && (
              <>
                <DropdownMenuSeparator />
                {pendingLendings.map((lending) => (
                  <DropdownMenuItem key={lending.id}>
                    <CircleCheckBig className="text-green-400" size={17} />
                    Mark as returned
                  </DropdownMenuItem>
                ))}
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const LendReturnTable = () => (
  <DataTable<LendReturn>
    data={lendings}
    columns={columns}
    type="LendReturn"
    filterableColumns={["status", "member_name", "book_title", "Lent_date"]}
  />
);

export default LendReturnTable;
