"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const Preview = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLDivElement>(".card");

      cards.forEach((c) => {
        const rect = c.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // proximity check (inside or within 60px outside)
        const outsideX =
          e.clientX < rect.left - 60 || e.clientX > rect.right + 60;
        const outsideY =
          e.clientY < rect.top - 60 || e.clientY > rect.bottom + 60;

        if (!(outsideX || outsideY)) {
          c.classList.add("active");
          c.style.setProperty("--x", `${x}px`);
          c.style.setProperty("--y", `${y}px`);
        } else {
          c.classList.remove("active");
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card bg-secondary rounded-l-md p-2 border border-gray-600 text-center md:-ml-4 lg:-ml-0"
    >
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
