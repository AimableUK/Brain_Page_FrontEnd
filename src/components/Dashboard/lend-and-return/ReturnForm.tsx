import { LendReturn } from "@/lib/utils";
import React from "react";
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
import { returnSchema, ReturnSchema } from "@/lib/formValidation";
import { useForm } from "react-hook-form";

const LendForm = ({ data }: { data?: LendReturn }) => {
  const form = useForm<ReturnSchema>({
    resolver: zodResolver(returnSchema),
    defaultValues: {
      member_id: data?.member_id || "",
    },
  });

  function onSubmit(values: ReturnSchema) {
    console.log(values);
  }

  return (
    <Card>
      <CardContent className="my-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-2"
          >
            {/* member_id */}
            <FormField
              control={form.control}
              name="member_id"
              defaultValue={data?.member_id || ""}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Member ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Member id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <div className="flex flex-end gap-x-2">
              <Button type="submit" className="w-full">
                Return Book
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LendForm;
