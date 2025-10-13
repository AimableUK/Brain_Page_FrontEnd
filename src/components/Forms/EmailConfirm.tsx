/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";

type Status = "loading" | "success" | "error";

export default function EmailConfirm() {
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");

    const verify = async () => {
      if (!key) {
        setErrorMessage("Missing confirmation key in the URL.");
        setStatus("error");
        return;
      }

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/dj-rest-auth/registration/verify-email/",
          { key }
        );

        console.log("verify res:", res.data);
        setStatus("success");
        router.push("sign-in");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error("verify error", err?.response ?? err);
        setErrorMessage(
          err?.response?.data
            ? JSON.stringify(err.response.data)
            : String(err.message)
        );
        setStatus("error");
      }
    };

    verify();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center w-fit">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>Verify your Email Address</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          {status === "loading" && <p>Verifying your email...</p>}
          {status === "success" && (
            <p className="text-green-600 font-semibold">
              Email confirmed successfully! You can now log in.
            </p>
          )}
          {status === "error" && (
            <>
              <p className="text-red-500 font-semibold">
                Invalid or expired confirmation link.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
