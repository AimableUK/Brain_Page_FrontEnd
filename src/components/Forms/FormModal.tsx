import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {action === "delete"
                ? `Delete ${type}`
                : action === "edit"
                ? `Edit ${type}`
                : `Add ${type}`}
            </DialogTitle>
          </DialogHeader>

          {action === "delete" && (
            <DialogDescription>
              Are you sure you want to delete {rowdata?.title as string}?
            </DialogDescription>
          )}

          {action === "edit" && (
            <DialogDescription>
              Are you sure you want to edit {rowdata?.title as string}?
            </DialogDescription>
          )}

          {action === "add" && (
            <DialogDescription>
              Are you sure you want to add {rowdata?.title as string}?
            </DialogDescription>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              variant={action === "delete" ? "destructive" : "default"}
            >
              {action === "delete" ? "Delete" : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default FormModal;
