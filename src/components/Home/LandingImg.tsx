"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const LandingImg = () => {
  const { theme } = useTheme();
  return (
    <>
      <Image
        className={`${
          theme === "dark" || !theme
            ? "image-gradient-home-dark"
            : "image-gradient-home-light"
        } z-10`}
        src="/gradient.png"
        alt="landing gradient"
        width={500}
        height={500}
      />
      <div
        className={`${
          theme === "dark" ? "layer-blur-home-dark" : "layer-blur-home-light"
        } z-10`}
      ></div>
    </>
  );
};

export default LandingImg;
