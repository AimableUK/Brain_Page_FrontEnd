import { LoginForm } from "@/components/Forms/login-form";
import LineBreak from "@/components/Home/LineBreak";
import Header from "@/components/includes/Landing/Header";
import React from "react";
import { metadata as meta } from "@/lib/utils";

export const metadata = meta.signIn;

const page = () => {
  return (
    <div>
      <Header />
      <LineBreak />
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
