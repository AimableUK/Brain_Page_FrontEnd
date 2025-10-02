"use client";

import Image from "next/image";
import { useCardHoverEffect } from "../includes/Theme/UseCardHover";

const Preview = ({ className }: { className: string }) => {
  useCardHoverEffect(".card");

  return (
    <div className={className}>
      <Image
        width={1300}
        height={1000}
        src="/dashbordSample.png"
        alt="Product screenshot"
        className="w-3xl max-w-none rounded-md shadow-xl ring-1 ring-white/10 sm:w-228 "
      />
    </div>
  );
};

export default Preview;
