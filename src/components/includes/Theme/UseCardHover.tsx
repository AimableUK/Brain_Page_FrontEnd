import { useEffect } from "react";

export function useCardHoverEffect(selector: string = ".card") {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLDivElement>(selector);

      cards.forEach((c) => {
        const rect = c.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

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
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [selector]);
}
