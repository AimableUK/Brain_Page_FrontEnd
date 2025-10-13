/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Book } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bookSchema, BookSchema } from "@/lib/formValidation";
import DatePicker from "@/components/Forms/DatePicker";
import { toast } from "sonner";
import axios from "axios";
import axiosInstance from "@/hooks/axiosInstance";

const BookForm = ({
  data,
  action,
  setOpen,
  refetch,
}: {
  data?: Book;
  action: "add" | "edit" | "delete";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: () => Promise<void>;
}) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: data?.title || "",
      author: data?.author || "",
      isbn: data?.isbn || "",
      genre: data?.genre || "",
      published_date: data?.published_date
        ? new Date(data.published_date)
        : undefined,
      language: data?.language || "",
      total_copies: data?.total_copies ? Number(data.total_copies) : undefined,
    },
  });

  const onSubmit = async (values: BookSchema) => {
    try {
      setLoading(true);

      const payload = {
        title: values.title,
        author: values.author,
        isbn: values.isbn,
        genre: values.genre,
        language: values.language,
        published_date: values.published_date.toISOString().split("T")[0],
        total_copies: Number(values.total_copies),
        ...(action === "add" && {
          available_copies: Number(values.total_copies),
        }),
        status: true,
      };

      if ((action === "edit" || action === "delete") && !data?.id) {
        throw new Error("No book ID provided for edit/delete");
      }

      const promise =
        action === "add"
          ? axiosInstance.post("books/", payload)
          : axiosInstance.put(`books/${data?.id}/`, payload);

      toast.promise(promise, {
        loading: "Processing...",
        success: () => ({
          message: `Book Is ${action === "add" ? "Added" : "Updated"}`,
          description: `The book was ${
            action === "add" ? "added" : "updated"
          } successfully.`,
        }),
        error: (error) => ({
          message: "Error",
          description:
            error?.response?.data?.detail || "Failed to process your request.",
        }),
      });

      await promise;
      if (refetch) await refetch();
      form.reset();
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data) {
          if (data) {
            const messages = Object.values(data).flat().join(" and ");
            toast.error("Error", { description: messages });
          }
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

  const onSubmitDelete = async () => {
    try {
      if (!data?.id) throw new Error("No book ID provided for delete");

      setLoading(true);

      const promise = axiosInstance.delete(`books/${data.id}/`);

      toast.promise(promise, {
        loading: "Deleting...",
        success: () => ({
          message: "Book Deleted",
          description: `The book "${data.title}" was deleted successfully.`,
          classNames: {
            toast: "bg-green-500 text-white",
          },
        }),
        error: (error) => ({
          message: "Error",
          description:
            error?.response?.data?.detail ||
            "Failed to delete this book, Try Again.",
        }),
      });

      await promise;
      if (refetch) await refetch();
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

  return action === "delete" ? (
    <Card>
      <div className="m-4 gap-4 mt-3 flex flex-col justify-between w-full items-center">
        <p>Are you sure you want to delete {data?.title}?</p>
        <div className="flex flex-row gap-1 justify-center w-2/4">
          <Button
            type="button"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full"
            variant="destructive"
            onClick={onSubmitDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Card>
  ) : (
    <Card>
      <CardContent className="my-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-2"
          >
            {/* title */}
            <FormField
              control={form.control}
              name="title"
              defaultValue={data?.title || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* author */}
            <FormField
              control={form.control}
              name="author"
              defaultValue={data?.author || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book author" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* isbn */}
            <FormField
              control={form.control}
              name="isbn"
              defaultValue={data?.isbn || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book isbn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="published_date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DatePicker
                      value={
                        field.value instanceof Date ? field.value : undefined
                      }
                      onChange={(date) => field.onChange(date || undefined)}
                      title="Publish Date"
                      helperText="Published On"
                      defaultValue={data?.published_date}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* genre */}
            <FormField
              control={form.control}
              name="genre"
              defaultValue={data?.genre || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book genre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* language */}
            <FormField
              control={form.control}
              name="language"
              defaultValue={data?.language || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book language" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* total_copies */}
            <FormField
              control={form.control}
              name="total_copies"
              defaultValue={Number(data?.total_copies) || undefined}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Copies</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book total_copies" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex flex-end gap-x-2">
              <Button type="submit" className="w-full">
                {action === "add" ? "Create" : "Update"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookForm;
