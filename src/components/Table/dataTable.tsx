"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  Row,
} from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  FileDown,
  Plus,
  SlidersHorizontal,
  StepBack,
  StepForward,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormModal from "../Forms/FormModal";
import { Book, LendReturn } from "@/lib/utils";

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  type?: string;
  filterableColumns?: (keyof T)[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  fetchError?: string | null;
  refetch?: () => Promise<void>;
};

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  type,
  filterableColumns,
  open,
  setOpen,
  loading,
  fetchError,
  refetch,
}: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [valueType, setValueType] = React.useState<"Lend" | "Return">("Lend");

  const globalSearchFilter = (
    row: Row<T>,
    _columnId: string,
    filterValue: string
  ) => {
    const search = filterValue.toLowerCase();

    const columnsToSearch =
      filterableColumns ?? row.getAllCells().map((cell) => cell.column.id);

    return columnsToSearch.some((col) => {
      const key = col as keyof T;
      const value = row.getValue(key as string);

      if (value === undefined || value === null) return false;

      if (col === "status") {
        const status = String(value).toLowerCase();
        return status.includes(search.toLowerCase());
      }

      return String(value).toLowerCase().includes(search);
    });
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: globalSearchFilter,
  });

  const step = 10;
  const totalRows = data?.length;
  const dynamicPageSizes: number[] = [];

  for (let size = step; size < totalRows; size += step) {
    dynamicPageSizes.push(size);
  }

  if (!dynamicPageSizes.includes(totalRows)) {
    dynamicPageSizes.push(totalRows);
  }

  const handleLendReturn = (value: "Lend" | "Return") => {
    setValueType(value);
    setOpen(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between gap-x-2 items-center py-4">
        <Input
          placeholder={`Search ${
            type === "LendReturn" ? "Lend & Return" : type
          }s...`}
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm border focus:border-accent"
        />

        <div className="flex flex-row gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                <SlidersHorizontal />
                View
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            className="active:scale-95 transition-all duration-150 ease-in-out"
          >
            <FileDown />
            Export
          </Button>
          {type === "LendReturn" ? (
            <>
              <Button
                variant="secondary"
                className="border hover:border-accent active:scale-95 transition-all duration-150 ease-in-out"
                onClick={() => handleLendReturn("Return")}
              >
                <Plus strokeWidth={2.4} />
                Return book
              </Button>
              <Button
                className="bg-accent text-gray-50 hover:text-accent active:scale-95 transition-all duration-150 ease-in-out"
                onClick={() => handleLendReturn("Lend")}
              >
                <Plus strokeWidth={2.4} />
                Lend Book
              </Button>

              {valueType === "Lend" ? (
                <FormModal<LendReturn>
                  type={valueType}
                  open={open}
                  setOpen={setOpen}
                  action="add"
                />
              ) : (
                <FormModal<LendReturn>
                  type={valueType}
                  open={open}
                  setOpen={setOpen}
                  action="add"
                />
              )}
            </>
          ) : (
            <>
              <Button
                className="bg-accent text-gray-50 hover:text-accent active:scale-95 transition-all duration-150 ease-in-out"
                onClick={() => setOpen(true)}
              >
                <Plus strokeWidth={2.4} />
                Add&nbsp;
                {type === "Book" ? "Book" : "Member"}
              </Button>
              <FormModal<Book>
                type={type}
                open={open}
                setOpen={setOpen}
                action="add"
              />
            </>
          )}
        </div>
      </div>
      <div className="overflow-x-auto rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-2"
                >
                  <div className="flex items-center justify-center h-full w-full">
                    <div className="loader"></div>
                  </div>
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : fetchError ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-red-500 font-medium"
                >
                  <div className="flex items-center justify-center h-full w-full">
                    {fetchError}
                    <Button type="button" onClick={refetch}>
                      Reload
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center gap-2">
          <button
            className="border rounded-sm p-1 disabled:opacity-55"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <StepBack size={18} />
          </button>
          <button
            className="border rounded-sm p-1 -mr-1 disabled:opacity-55"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="border rounded-sm p-1 disabled:opacity-55"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight size={18} />
          </button>
          <button
            className="border rounded-sm p-1 disabled:opacity-55"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <StepForward size={18} />
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <Input
              type="number"
              min="1"
              max={table.getPageCount()}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value: string) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Show Page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Show Page</SelectLabel>
                {dynamicPageSizes.map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize.toString()}>
                    Show {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
          {table.getRowCount().toLocaleString()} Rows
        </div>
      </div>
    </div>
  );
}
