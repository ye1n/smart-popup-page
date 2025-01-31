import React from "react";

type Props = {
  text: string;
  variant?: "red";
};

const Badge: React.FC<Props> = ({ text, variant = "red" }) => {
  const color = variant === "red" ? "bg-[#d92222] text-custom-white" : "";

  return (
    <div className={`h-[24px] px-2 py-1 cursor-default ${color}`}>
      <p className="text-xs">{text}</p>
    </div>
  );
};

export default Badge;
