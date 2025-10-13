/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { AuthContext } from "@/hooks/AuthProvider";
import { useRouter } from "next/navigation";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/dashboard/overview");
  }, [isLoggedIn, router]);

  const onSubmit = async (values: SignUpSchema) => {
    try {
      setLoading(true);

      const payload = {
        username: values.username,
        email: values.email,
        password1: values.password1,
        password2: values.password2,
      };

      const headers = { "Content-Type": "application/json" };

      const promise = axios.post(
        "http://127.0.0.1:8000/dj-rest-auth/registration/",
        payload,
        {
          headers,
        }
      );

      toast.promise(promise, {
        loading: "Registering...",
        success: () => ({
          message: `Registration Successful`,
          description: `Please verify the email Sent to activate account`,
        }),
        error: (error) => ({
          message: "Error",
          description:
            error?.response?.data?.detail || "Failed to process your request.",
        }),
      });

      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        if (data) {
          const messages = Object.values(data).flat().join(" & ");
          toast.error("Error", { description: messages });
        } else {
          toast.error("Error", { description: "Something went wrong." });
        }
      } else {
        toast.error("Error", { description: "Something went wrong." });
      }
    } finally {
      setLoading(false);
    }
  };

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
              <FormField
                control={form.control}
                name="username"
                defaultValue=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Enter Email"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row w-full gap-2">
                <FormField
                  control={form.control}
                  name="password1"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password2"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Confirm your password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
