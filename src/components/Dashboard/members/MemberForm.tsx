/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Member } from "@/lib/utils";
import React, { useState } from "react";
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
import { memberSchema, MemberSchema } from "@/lib/formValidation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import axiosInstance from "@/hooks/axiosInstance";

const MemberForm = ({
  data,
  action,
  setOpen,
  refetch,
}: {
  data?: Member;
  action: "add" | "edit" | "delete";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch?: () => Promise<void>;
}) => {
  const [books, setBooks] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm<MemberSchema>({
    resolver: zodResolver(memberSchema),
    defaultValues: {
      full_name: data?.full_name || "",
      email: data?.email || "",
      address: data?.address || "",
      phone: data?.phone || "",
    },
  });

  const onSubmit = async (values: MemberSchema) => {
    try {
      setLoading(true);

      const payload = {
        full_name: values?.full_name,
        ...(values?.email.length >= 1 && { email: values.email }),
        ...(values?.phone.length >= 1 && { phone: values.phone }),
        address: values?.address,
      };

      if ((action === "edit" || action === "delete") && !data?.id) {
        throw new Error("No member ID provided for edit/delete");
      }

      const promise =
        action === "add"
          ? axiosInstance.post("members/", payload)
          : axiosInstance.put(`members/${data?.id}/`, payload);

      toast.promise(promise, {
        loading: "Processing...",
        success: () => ({
          message: `Member Is ${action === "add" ? "Added" : "Updated"}`,
          description: `The member was ${
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

      const promise = axiosInstance.delete(`members/${data.id}/`);

      toast.promise(promise, {
        loading: "Deleting...",
        success: () => ({
          message: "Member Deleted",
          description: `${data.full_name} was deleted successfully.`,
        }),
        error: (error) => ({
          message: "Error",
          description:
            error?.response?.data?.detail ||
            "Failed to delete this member, Try Again.",
        }),
      });

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
        <p>Are you sure you want to delete {data?.full_name}?</p>
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
            {/* full_name */}
            <FormField
              control={form.control}
              name="full_name"
              defaultValue={data?.full_name || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              defaultValue={data?.email || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              defaultValue={data?.phone || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* address */}
            <FormField
              control={form.control}
              name="address"
              defaultValue={data?.address || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
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

export default MemberForm;
