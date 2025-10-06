import { Member } from "@/lib/utils";
import React from "react";

const MemberForm = ({
  data,
  action,
}: {
  data?: Member;
  action: "add" | "edit" | "delete";
}) => {
  return action === "delete" ? (
    <div>Are you sure you want to delete this member {data?.full_name}</div>
  ) : (
    <div>
      Memerform {action} {data?.full_name}
    </div>
  );
};

export default MemberForm;
