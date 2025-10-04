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
  CircleDashed,
  CircleFadingPlus,
  Clipboard,
  Eye,
  FilePenLine,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import { data, Payment } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/Table/dataTable";

export const columns: ColumnDef<Payment>[] = [
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
      const status = row.getValue("status");
      return (
        <div className="flex items-center gap-2 lowercase">
          {status ? (
            <div className="border border-secondary gap-2 p-1 px-2 text-sm flex flex-row rounded-lg items-center">
              <CircleFadingPlus className="text-green-400" size={17} />
              <span>available</span>
            </div>
          ) : (
            <div className="border border-secondary gap-2 p-1 px-2 text-sm flex flex-row rounded-lg items-center">
              <CircleDashed className="text-red-500" size={17} />
              <span>not available</span>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("author")}</div>
    ),
  },
  {
    accessorKey: "total_copies",
    header: () => <div>Quantity</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("total_copies")}</div>
    ),
  },
  {
    accessorKey: "genre",
    header: () => <div>Genre</div>,
    cell: ({ row }) => <div className="lowercase">{row.getValue("genre")}</div>,
  },
  {
    accessorKey: "published_date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published_date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("published_date")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    accessorKey: "actions",
    cell: ({ row }) => {
      const book = row.original;

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
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(book.id)}
            >
              <Clipboard />
              Copy book ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Eye />
              View details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FilePenLine />
              Edit Book
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <Trash />
              Delete Book
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const BooksTable = () => (
  <DataTable
    data={data}
    columns={columns}
    type="Book"
    filterableColumns={["title", "author", "status", "genre", "published_date"]}
  />
);

export default BooksTable;
