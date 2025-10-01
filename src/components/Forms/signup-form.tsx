"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { signUpSchema, SignUpSchema } from "@/lib/formValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  function onSubmit(values: SignUpSchema) {
    console.log(values);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to sign up</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-2 w-full"
            >
              <div className="flex flex-col md:flex-row w-full gap-2">
                <InputField
                  control={form.control}
                  name="username"
                  label="Username"
                  placeholder="Enter username"
                />
                <InputField
                  control={form.control}
                  name="full_name"
                  label="Full Name"
                  placeholder="Enter full name"
                />
              </div>

              <div className="flex flex-col md:flex-row w-full gap-2">
                <InputField
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                />
                <InputField
                  control={form.control}
                  name="phone"
                  label="Phone"
                  placeholder="Enter phone number"
                />
              </div>

              <InputField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
              />

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              Got an account?{" "}
              <Link href="/sign-in" className="underline underline-offset-4">
                Sign In
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
