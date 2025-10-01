import React from "react";
import Image from "next/image";
import { ModeToggle } from "../Theme/ModeToggle";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DeskHeader = () => {
  return (
    <header className="hidden md:flex flex-row justify-between py-2 px-10 items-center">
      <Link href="/">
        <h3 className="text-xl font-bold flex flex-row items-center gap-x-2">
          <span>
            <Image
              src="/BrainPage.png"
              alt="Brain Page Logo"
              width={56}
              height={56}
            />
          </span>
          Brain Page
        </h3>
      </Link>

      <div className="flex flex-row gap-3 items-center">
        <Link href="/sign-in">
          <Button variant="ghost">Sign In</Button>
        </Link>

        <Link href="/sign-up">
          <Button variant="outline" className="group">
            <IoMdLogIn className="self-center size-5 font-bold text-accent group-hover:text-primary" />
            Sign Up
          </Button>
        </Link>

        <ModeToggle />
      </div>
    </header>
  );
};

export default DeskHeader;
