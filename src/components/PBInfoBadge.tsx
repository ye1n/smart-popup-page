import React from "react";

type Props = {
  text: string;
  variant?: "red" | "gray";
};

const PBInfoBadge: React.FC<Props> = ({ text, variant = "gray" }) => {
  const color =
    variant === "red"
      ? "bg-[#d92222] text-[#d92222]"
      : "bg-custom-gray-1 text-custom-gray-1";

  return (
    <div
      className={`inline-block bg-opacity-10 rounded-[10px] py-0.5 px-2 ${color}`}
    >
      <p className="text-[10px]">{text}</p>
    </div>
  );
};

export default PBInfoBadge;
