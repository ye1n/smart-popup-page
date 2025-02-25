import React from "react";

type Props = {
  type?: "label" | "gray-label" | "contents" | "text";
  align?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
  rowSpan?: number;
  colSpan?: number;
};

const PBTd: React.FC<Props> = ({
  type = "contents",
  align = "center",
  children,
  className = "",
  rowSpan = 1,
  colSpan = 1,
}) => {
  return (
    <td
      rowSpan={rowSpan}
      colSpan={colSpan}
      className={`first:border-l-0 last:border-r-0 border-x border-pb-custom-form-line ${className} ${
        type === "label"
          ? "px-2 text-xs text-pb-custom-black bg-pb-custom-label-bg h-[26px]"
          : type === "gray-label"
          ? "px-2 text-xs text-pb-custom-black bg-pb-custom-form-bg h-[26px]"
          : type === "text"
          ? "px-2 text-xs text-pb-custom-black h-[26px] bg-pb-custom-white"
          : ""
      } ${
        align === "left"
          ? "text-left"
          : align === "right"
          ? "text-right"
          : "text-center"
      }`}
    >
      {children && children}
    </td>
  );
};

export default PBTd;
