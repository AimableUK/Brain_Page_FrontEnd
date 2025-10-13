"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import { ModeToggle } from "../Theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
import { AuthContext } from "@/hooks/AuthProvider";

const MobileHeader = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  return (
    <header className="md:hidden flex flex-col px-5 gap-y-2 pt-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-xl font-bold flex flex-row items-center gap-x-2">
          <span>
            <Image
              src="/BrainPage.png"
              alt="Brain Page Logo"
              width={35}
              height={35}
            />
          </span>
          Brain Page
        </h3>
        <div>
          {menuDisplay ? (
            <RiMenuFold4Fill
              onClick={() => setMenuDisplay(false)}
              className="cursor-pointer text-2xl hover:scale-105  primary-transition"
            />
          ) : (
            <RiMenuFold3Fill
              onClick={() => setMenuDisplay(true)}
              className="cursor-pointer text-2xl hover:scale-105 primary-transition"
            />
          )}
        </div>
      </div>

      {/* Animated Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
            ${
              menuDisplay
                ? "max-h-[500px] opacity-100 mb-3"
                : "max-h-0 opacity-0"
            }
          `}
      >
        <div className="bg-gradient-to-l from-secondary to-secondary via-cardBorder py-[0.3px] mx-5 my-3"></div>

        <div className="flex flex-row gap-3 w-full self-end justify-center">
          {!isLoggedIn ? (
            <>
              <Link href="/dashboard/overview">
                <Button variant="outline" className="w-full">
                  Dashboard
                </Button>
              </Link>

              <Link href="/sign-out">
                <Button variant="outline" className="group w-full text-primary">
                  <IoMdLogIn className="self-center size-5 font-bold text-accent group-hover:text-primary" />
                  Sign Out
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button variant="outline" className="group w-full text-primary">
                  <IoMdLogIn className="self-center size-5 font-bold text-accent group-hover:text-primary" />
                  Sign up
                </Button>
              </Link>
            </>
          )}

          <ModeToggle className="w-fit p-3 md:p-0" />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
