"use client";

import Image from "next/image";
import { useCardHoverEffect } from "../includes/Theme/UseCardHover";

const Preview = ({ className, pic }: { className: string, pic: string }) => {
  useCardHoverEffect(".card");

  return (
    <div className={className}>
      <Image
        width={1200}
        height={900}
        src={pic}
        alt="Product screenshot"
        className="w-3xl max-w-none rounded-md shadow-xl ring-1 ring-white/10 sm:w-228 "
      />
    </div>
  );
};

export default Preview;
