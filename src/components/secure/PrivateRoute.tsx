"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/sign-in");
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (isLoggedIn === null)
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="loader2"></div>
      </div>
    );

  return <>{children}</>;
}
