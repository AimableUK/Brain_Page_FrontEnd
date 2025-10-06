import { LendReturn } from "@/lib/utils";
import React from "react";

const LendReturnForm = ({
  data,
  action,
}: {
  data?: LendReturn;
  action: "add" | "edit" | "delete";
}) => {
  return (
    <div>
      LendReturnForm {action} {data?.member_name}
    </div>
  );
};

export default LendReturnForm;
