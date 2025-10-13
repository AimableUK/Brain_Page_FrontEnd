import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center md:justify-between md:flex-row py-2 px-3 md:px-10 items-center gap-y-3">
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

      <p className="font-normal">
        Copyright &copy; {new Date().getFullYear()} - All right reserved
      </p>
      <p className="font-normal flex flex-row items-center ">
        Made with&nbsp;
        <FaHeart className="size-4 text-accent" />
        &nbsp;by&nbsp;<b>Aimable UKOBIZABA</b>
      </p>
    </footer>
  );
};

export default Footer;
