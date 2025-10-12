"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ num }: { num: number }) => {
  return (
    <div className="w-full">
      <CountUp duration={2.75} decimal="," end={num} />
    </div>
  );
};

export default AnimatedCounter;
