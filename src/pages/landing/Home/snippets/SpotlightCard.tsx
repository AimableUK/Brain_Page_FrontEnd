import React, { useRef, useEffect } from "react";
// import "./main.css"; // Include your original .card styles with ::before overlay

interface Props {
  number: string;
  label: string;
}

const SpotlightCard: React.FC<Props> = ({ number, label }) => {
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
      className="card bg-secondary rounded-md p-5 border border-gray-600 text-center"
    >
      <h1 className="text-4xl font-bold">{number}</h1>
      <p className="text-lg text-gray-400">{label}</p>
    </div>
  );
};

export default SpotlightCard;
