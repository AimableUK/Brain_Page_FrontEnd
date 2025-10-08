import { Book } from "@/lib/utils";
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
import { useForm } from "react-hook-form";
import { bookSchema, BookSchema } from "@/lib/formValidation";
import DatePicker from "@/components/Forms/DatePicker";

const BookForm = ({
  data,
  action,
}: {
  data?: Book;
  action: "add" | "edit" | "delete";
}) => {
  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: data?.title || "",
      author: data?.author || "",
      isbn: data?.isbn || "",
      genre: data?.genre || "",
      language: data?.language || "",
      total_copies: data?.total_copies || "",
    },
  });

  function onSubmit(values: BookSchema) {
    console.log(values);
  }

  return action === "delete" ? (
    <div>Are you sure you want to delete this book {data?.title}</div>
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
              defaultValue={data?.total_copies || ""}
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
