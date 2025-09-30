import React from "react";
import Image from "next/image";
import { ModeToggle } from "../Theme/ModeToggle";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";

const DeskHeader = () => {
  return (
    <header className="hidden md:flex flex-row justify-between py-2 px-10 items-center">
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
      <div className="flex flex-row gap-3 items-center">
        <Button variant="ghost">Log In</Button>

        <Button variant="outline" className="group">
          <IoMdLogIn className="self-center size-5 font-bold text-accent group-hover:text-primary" />
          Sign up
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
};

export default DeskHeader;
