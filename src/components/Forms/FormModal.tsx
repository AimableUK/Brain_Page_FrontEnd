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
}
const BookForm = dynamic<BookFormProps>(
  () => import("../Dashboard/books/BookForm"),
  {
    loading: () => (
      <span className="text-center py-4 text-gray-500">Loading form...</span>
    ),
  }
);

interface MemberFormProps {
  data?: Member;
  action: "add" | "edit" | "delete";
}
const MemberForm = dynamic<MemberFormProps>(
  () => import("../Dashboard/members/MemberForm"),
  {
    loading: () => (
      <span className="text-center py-4 text-gray-500">Loading form...</span>
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
      <span className="text-center py-4 text-gray-500">Loading form...</span>
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
      <span className="text-center py-4 text-gray-500">Loading form...</span>
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
        return <BookForm action={action} data={data as Book} />;
      case "Member":
        return <MemberForm action={action} data={data as Member} />;
      case "Lend":
        return <LendForm action={action} data={data as LendReturn} />;
      default:
        return <ReturnForm action={action} data={data as LendReturn} />;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <DialogContent className="overflow-y-auto">
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
