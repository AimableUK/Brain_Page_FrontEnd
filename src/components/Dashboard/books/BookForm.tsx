import { Book } from "@/lib/utils";
import React from "react";

const BookForm = ({
  data,
  action,
}: {
  data?: Book;
  action: "add" | "edit" | "delete";
}) => {
  return action === "delete" ? (
    <div>Are you sure you want to delete this book {data?.title}</div>
  ) : (
    <div>
      BookForm {action} {data?.title}
    </div>
  );
};

export default BookForm;
