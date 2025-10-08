import { books, LendReturn, members } from "@/lib/utils";
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

const LendForm = ({ data }: { data?: LendReturn }) => {
  const form = useForm<LendSchema>({
    resolver: zodResolver(lendSchema),
    defaultValues: {
      book: data?.book_title || "",
      member: data?.member_name || "",
      return_date: data?.return_date
    },
  });

  function onSubmit(values: LendSchema) {
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
            {/* book */}
            <FormField
              control={form.control}
              name="book"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Book</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || ""}
                      defaultValue={field.value || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a book" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Books</SelectLabel>
                          {books.map((book) => (
                            <SelectItem key={book.id} value={book.title}>
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
                      onValueChange={field.onChange}
                      value={field.value || ""}
                      defaultValue={field.value || ""}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select member" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Members</SelectLabel>
                          {members.map((member) => (
                            <SelectItem
                              key={member.id}
                              value={member.full_name}
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
