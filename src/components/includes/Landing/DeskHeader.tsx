
import React from "react";
import Image from "next/image";
import { ModeToggle } from "../Theme/ModeToggle";

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
        <a href="#" className="hover:text-textSecondary primary-transition">
          Login
        </a>
        <a
          href="#"
          className="rounded-md px-2 py-1 bg-background border border-cardBorder hover:text-textSecondary hover:border-textSecondary w-full primary-transition"
        >
          Sign Up
        </a>
        <ModeToggle />
      </div>
    </header>
  );
};

export default DeskHeader;
