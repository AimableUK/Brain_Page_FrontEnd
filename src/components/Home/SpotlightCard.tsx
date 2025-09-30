import React from "react";

interface Props {
  number: string;
  label: string;
}

const SpotlightCard: React.FC<Props> = ({ number, label }) => {
  return (
    <div className="card bg-secondary rounded-md p-5 border border-gray-600 text-center">
      <h1 className="text-4xl font-bold">{number}</h1>
      <p className="text-lg text-textPrimaryLight">{label}</p>
    </div>
  );
};

export default SpotlightCard;
