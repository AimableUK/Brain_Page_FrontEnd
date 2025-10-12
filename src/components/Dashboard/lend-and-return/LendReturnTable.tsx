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
  Clipboard,
  Clock4,
  MoreHorizontal,
  TimerReset,
} from "lucide-react";
import { LendReturn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/Table/dataTable";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

type LendReturnProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  lendings: LendReturn[];
  fetchError: string | null;
  fetchLendings: () => Promise<void>;
};

const LendReturnTable = ({
  loading,
  lendings,
  fetchLendings,
  fetchError,
  setLoading,
}: LendReturnProps) => {
  const [open, setOpen] = useState(false);

  const handleMarkAsReturned = async (data: LendReturn) => {
    try {
      if (!data?.id) throw new Error("No lending ID provided.");

      setLoading(true);

      const headers = { "Content-Type": "application/json" };

      const promise = axios.post(
        `http://127.0.0.1:8000/api/v1/return/${data.id}/`,
        { headers }
      );

      toast.promise(promise, {
        loading: "Processing...",
        success: () => ({
          message: "Book Returned",
          description: `${data.book_title} was returned successfully.`,
        }),
        error: (error) => ({
          message: "Error",
          description:
            error?.response?.data?.detail ||
            "Failed to return this book, Try Again.",
        }),
      });

      await promise;
      if (fetchLendings) await fetchLendings();
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data) {
          const messages = Object.values(data).flat().join(" and ");
          toast.error("Error", { description: messages });
        } else {
          toast.error("Error", { description: "Something went wrong." });
        }
      } else {
        toast.error("Error", { description: "Something went wrong." });
      }
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnDef<LendReturn>[] = [
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
                  <CircleCheckBig className="text-green-400" size={15} />
                )}
                {status === "Lent" && <TimerReset className="" size={15} />}
                {status === "Overdue" && (
                  <Clock4 className="text-red-500" size={15} />
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
      accessorKey: "lent_date",

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
        <div className="lowercase">{row.getValue("lent_date")}</div>
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
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(book?.book_id)}
              >
                <Clipboard />
                Copy Book ID
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(book?.member_id)}
              >
                <Clipboard />
                Copy Member ID
              </DropdownMenuItem>
              {pendingLendings.length > 0 && (
                <>
                  <DropdownMenuSeparator />
                  {pendingLendings.map((lending) => (
                    <DropdownMenuItem
                      key={lending.id}
                      onClick={() => handleMarkAsReturned(row.original)}
                    >
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

  return (
    <DataTable<LendReturn>
      data={lendings}
      columns={columns}
      type="LendReturn"
      filterableColumns={["status", "member_name", "book_title", "Lent_date"]}
      open={open}
      setOpen={setOpen}
      loading={loading}
      fetchError={fetchError}
      refetch={fetchLendings}
    />
  );
};

export default LendReturnTable;
