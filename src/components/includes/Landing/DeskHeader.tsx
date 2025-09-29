"use client";

import React from "react";
import Image from "next/image";
// import { useState } from "react";


const DeskHeader = () => {
  // const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

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
      <div className="flex flex-row gap-10 items-center">
        <a
          href="#"
          className="border rounded-md px-2 py-1 bg-primary border-cardBorder hover:text-textSecondary primary-transition"
        >
          Features
        </a>
        <a href="#" className="hover:text-textSecondary primary-transition">
          Pricing
        </a>
        <a href="#" className="hover:text-textSecondary primary-transition">
          About
        </a>
        <a href="#" className="hover:text-textSecondary primary-transition">
          Contact
        </a>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <a href="#" className="hover:text-textSecondary primary-transition">
          Login
        </a>
        <a
          href="#"
          className="rounded-md px-2 py-1 bg-primary border border-cardBorder hover:text-textSecondary hover:border-textSecondary w-full primary-transition"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default DeskHeader;
