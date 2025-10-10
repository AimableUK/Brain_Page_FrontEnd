import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Book, LendReturn, Member } from "@/lib/utils";

interface BookFormProps {
  data?: Book;
  action: "add" | "edit" | "delete";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BookForm = dynamic<BookFormProps>(
  () => import("../Dashboard/books/BookForm"),
  {
    loading: () => (
      <span className="flex items-center justify-center h-full w-full">
        <div className="loader"></div>
      </span>
    ),
  }
);

interface MemberFormProps {
  data?: Member;
  action: "add" | "edit" | "delete";
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MemberForm = dynamic<MemberFormProps>(
  () => import("../Dashboard/members/MemberForm"),
  {
    loading: () => (
      <span className="flex items-center justify-center h-full w-full">
        <div className="loader"></div>
      </span>
    ),
  }
);

interface LendFormProps {
  data?: LendReturn;
  action: "add" | "edit" | "delete";
}
const LendForm = dynamic<LendFormProps>(
  () => import("../Dashboard/lend-and-return/LendForm"),
  {
    loading: () => (
      <span className="flex items-center justify-center h-full w-full">
        <div className="loader"></div>
      </span>
    ),
  }
);

interface ReturnFormProps {
  data?: LendReturn;
  action: "add" | "edit" | "delete";
}
const ReturnForm = dynamic<ReturnFormProps>(
  () => import("../Dashboard/lend-and-return/ReturnForm"),
  {
    loading: () => (
      <span className="flex items-center justify-center h-full w-full">
        <div className="loader"></div>
      </span>
    ),
  }
);

interface FormModalProps<T extends Record<string, unknown>> {
  type?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  action: "add" | "edit" | "delete";
  rowdata?: T;
}

const FormModal = <T extends Record<string, unknown>>({
  type,
  open,
  setOpen,
  action,
  rowdata,
}: FormModalProps<T>) => {
  const MainForm = ({
    data,
    action,
  }: {
    data?: Record<string, unknown>;
    action: "add" | "edit" | "delete";
  }) => {
    switch (type) {
      case "Book":
        return (
          <BookForm action={action} data={data as Book} setOpen={setOpen} />
        );
      case "Member":
        return <MemberForm action={action} data={data as Member} setOpen={setOpen} />;
      case "Lend":
        return <LendForm action={action} data={data as LendReturn} />;
      default:
        return <ReturnForm action={action} data={data as LendReturn} />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex flex-col">
        <DialogContent
          className={` ${
            action !== "delete" && "h-5/6 !rounded-r-none"
          } overflow-y-auto p-3 md:p-5`}
        >
          <DialogHeader>
            <DialogTitle>
              {type === "Lend"
                ? "Create a new Lending"
                : type === "Return"
                ? "Create a new Return"
                : action === "delete"
                ? `Delete ${type}`
                : action === "edit"
                ? `Edit ${type}`
                : `Add ${type}`}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            {action === "add"
              ? `Create a new ${type}`
              : action === "edit"
              ? `Edit ${type}`
              : action === "delete"
              ? `Delete ${type}`
              : ""}
          </DialogDescription>

          {action === "delete" && type !== "LendReturn" && (
            <div>
              <MainForm action="delete" data={rowdata} />
            </div>
          )}

          {action === "edit" && type !== "LendReturn" && (
            <div>
              <MainForm action="edit" data={rowdata} />
            </div>
          )}

          {action === "add" && (
            <div>
              <MainForm action="add" data={rowdata} />
            </div>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default FormModal;
