/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/lib/formValidation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { AuthContext } from "@/hooks/AuthProvider";
import { useRouter } from "next/navigation";
// import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) router.push("/dashboard/overview");
  }, [isLoggedIn, router]);

  const onSubmit = async (values: LoginSchema) => {
    try {
      setLoading(true);

      const payload = {
        username: values.username,
        password: values.password,
      };

      const headers = { "Content-Type": "application/json" };

      const loginPromise = axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}token/`,
        payload,
        { headers }
      );

      toast.promise(loginPromise, {
        loading: "Logging In...",
        success: "Sign In Successful, Redirecting to dashboard",
        error: (err) => {
          const messages = err?.response?.data
            ? Object.values(err.response.data).flat().join(" & ")
            : "Failed to process your request.";
          return messages;
        },
      });

      const response = await loginPromise;
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      setIsLoggedIn(true);
      router.push("/dashboard/overview");
      form.reset();
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  // const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
  //   if (!credentialResponse.credential) {
  //     console.error("No credential received from Google");
  //     return;
  //   }
  //   try {
  //     const baseURL = process.env.NEXT_PUBLIC_BACKEND_API;
  //     const res = await fetch(`${baseURL}google/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         access_token: credentialResponse.credential,
  //       }),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       console.error("Backend error:", errorData);
  //       return;
  //     }

  //     const data = await res.json();
  //     console.log("JWT tokens from backend:", data);

  //     localStorage.setItem("access_token", data.access_token);
  //     localStorage.setItem("refresh_token", data.refresh_token);

  //     // optionally redirect
  //     // router.push("/dashboard");
  //   } catch (err) {
  //     console.error("Google login error:", err);
  //   }
  // };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Sign In to your account</CardTitle>
          <CardDescription>
            Enter your email or username below to login to your account
          </CardDescription>
          {/* <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => console.log("Google login failed")}
          /> */}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {/* Username */}
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
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
