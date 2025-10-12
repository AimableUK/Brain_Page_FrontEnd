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
  Clipboard,
  Eye,
  FilePenLine,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import { Member } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/Table/dataTable";
import { useState } from "react";
import FormModal from "@/components/Forms/FormModal";
import TimeAgo from "@/hooks/TimeAgo";

type MembersProps = {
  loading: boolean;
  members: Member[];
  fetchError: string | null;
  fetchMembers: () => Promise<void>;
};

const MembersTable = ({
  loading,
  members,
  fetchMembers,
  fetchError,
}: MembersProps) => {
  const [open, setOpen] = useState(false);

  type ModalData = {
    member: Member;
    action: "edit" | "delete";
    openMemberId: number;
  };
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const columns: ColumnDef<Member>[] = [
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
      accessorKey: "full_name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Full name
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("full_name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email") || "-"}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: () => <div>Phone</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("phone") || "-"}</div>
      ),
    },
    {
      accessorKey: "address",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Address
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("address")}</div>
      ),
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Created At
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">
          <TimeAgo timestamp={row.getValue("created_at")} />
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      accessorKey: "actions",
      cell: ({ row }) => {
        const member = row.original;

        return (
          <>
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
                  onClick={() => navigator.clipboard.writeText(member.id)}
                >
                  <Clipboard />
                  Copy member ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Eye />
                  View details
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    setModalData({
                      member,
                      action: "edit",
                      openMemberId: Number(member.id),
                    })
                  }
                >
                  <FilePenLine />
                  Edit Member
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={() =>
                    setModalData({
                      member,
                      action: "delete",
                      openMemberId: Number(member.id),
                    })
                  }
                >
                  <Trash />
                  Delete Member
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <FormModal<Member>
              type="Member"
              open={
                !!modalData && modalData?.openMemberId === Number(member.id)
              }
              setOpen={() => setModalData(null)}
              action={modalData?.action ?? "edit"}
              rowdata={modalData?.member}
            />
          </>
        );
      },
    },
  ];

  return (
    <DataTable<Member>
      data={members}
      columns={columns}
      type="Member"
      filterableColumns={["full_name", "email", "phone", "address"]}
      open={open}
      setOpen={setOpen}
      loading={loading}
      fetchError={fetchError}
      refetch={fetchMembers}
    />
  );
};

export default MembersTable;
