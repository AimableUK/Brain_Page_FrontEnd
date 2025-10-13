"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Status = "loading" | "success" | "error";

export default function EmailConfirm() {
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        // success should be HTTP 200
        console.log("verify res:", res.data);
        setStatus("success");
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {status === "loading" && <p>Verifying your email...</p>}
      {status === "success" && (
        <p className="text-green-600">
          ✅ Email confirmed successfully! You can now log in.
        </p>
      )}
      {status === "error" && (
        <>
          <p className="text-red-600">
             Invalid or expired confirmation link.
          </p>
          {errorMessage && (
            <pre className="mt-4 p-2 bg-gray-100 text-sm">{errorMessage}</pre>
          )}
        </>
      )}
    </div>
  );
}
