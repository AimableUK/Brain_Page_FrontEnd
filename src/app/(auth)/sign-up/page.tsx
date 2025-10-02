import { SignUpForm } from "@/components/Forms/signup-form";
import LineBreak from "@/components/Home/LineBreak";
import Header from "@/components/includes/Landing/Header";
import React from "react";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.signUp;

const page = () => {
  return (
    <div>
      <Header />
      <LineBreak />
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-3xl">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default page;
