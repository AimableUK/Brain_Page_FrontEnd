"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/hooks/axiosInstance";

export default function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        router.push("/sign-in");
        return;
      }

      try {
        await axiosInstance.get("/protected-view/");
      } catch (error) {
        console.error("Not authenticated", error);
        router.push("/sign-in");
      }
    };

    verifyAuth();
  }, [router]);
}
