import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-gray-100 max-w-sm">
      <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
