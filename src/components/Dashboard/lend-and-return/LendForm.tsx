/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Book, LendReturn, Member } from "@/lib/utils";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { lendSchema, LendSchema } from "@/lib/formValidation";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "@/components/Forms/DatePicker";
import { toast } from "sonner";
import axios from "axios";

const LendForm = ({
  data,
  setOpen,
  refetch,
}: {
  data?: LendReturn;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: () => Promise<void>;
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const form = useForm<LendSchema>({
    resolver: zodResolver(lendSchema),
    defaultValues: {
      book: Number(data?.book_id) || undefined,
      member: Number(data?.member_id) || undefined,
      return_date: data?.return_date ? new Date(data.return_date) : undefined,
    },
  });

  const fetchBooksMembers = async () => {
    try {
      setFetchError(null);
      setLoading(true);

      const booksList = "http://127.0.0.1:8000/api/v1/books/";
      const membersList = "http://127.0.0.1:8000/api/v1/members/";
      const headers = { "Content-Type": "application/json" };

      const promise = Promise.all([
        axios.get(booksList, { headers }),
        axios.get(membersList, { headers }),
      ]);

      const [booksResponse, membersResponse] = await promise;

      setBooks(booksResponse.data || []);
      setMembers(membersResponse.data.members || []);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFetchError(
          error.response?.data?.detail || "Failed to load. Try Again."
        );
      } else {
        setFetchError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!books.length || !members.length) {
      fetchBooksMembers();
    }
  }, [books.length, members.length]);

  const onSubmit = async (values: LendSchema) => {
    try {
      setLoading(true);

      const headers = { "Content-Type": "application/json" };

      const payload = {
        book_id: values.book,
        member_id: values.member,
        return_date: values.return_date.toISOString().split("T")[0],
      };

      const promise = axios.post(
        "http://127.0.0.1:8000/api/v1/lends/",
        payload,
        {
          headers,
        }
      );

      toast.promise(promise, {
        loading: "Processing...",
        success: () => ({
          message: `Book Lent.`,
          description: `The Book is lent Successfully!!`,
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

  return (
    <Card>
      <CardContent className="my-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-2"
          >
            {/* book */}
            <FormField
              control={form.control}
              name="book"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Book</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={field.value?.toString() || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a book">
                          {books.find((b) => b.id === field.value?.toString())
                            ?.title ?? undefined}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Books</SelectLabel>
                          {books.map((book) => (
                            <SelectItem
                              key={book.id}
                              value={book.id.toString()}
                            >
                              {book.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* member */}
            <FormField
              control={form.control}
              name="member"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Member</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={field.value?.toString() || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a member">
                          {members.find((m) => m.id === field.value?.toString())
                            ?.full_name ?? undefined}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Members</SelectLabel>
                          {members.map((member) => (
                            <SelectItem
                              key={member.id}
                              value={member.id.toString()}
                            >
                              {member.full_name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* return_date */}
            <FormField
              control={form.control}
              name="return_date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DatePicker
                      value={
                        field.value instanceof Date ? field.value : undefined
                      }
                      onChange={(date) => field.onChange(date || undefined)}
                      title="Return Date"
                      helperText="Return On"
                      defaultValue={data?.return_date}
                      type="Lend"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex flex-end gap-x-2">
              <Button type="submit" className="w-full">
                Lend Boook
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LendForm;
