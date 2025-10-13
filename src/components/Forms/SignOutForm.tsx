"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/hooks/AuthProvider";

const SignOutForm = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-semibold">Sign Out</CardTitle>
          <CardDescription>
            Are you sure you want to sign out from your account?
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-4 mt-4">
          <Button
            onClick={handleSignOut}
            variant="destructive"
            className="w-full"
          >
            Yes, Sign Out
          </Button>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="w-full"
          >
            Cancel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignOutForm;
