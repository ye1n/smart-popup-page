import React from "react";

type Props = {
  type?: "label" | "contents" | "text";
  align?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
  rowSpan?: number;
  colSpan?: number;
};

const Td: React.FC<Props> = ({
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
      className={`border-x border-custom-form-line ${className} ${
        type === "label"
          ? "px-2 text-xs text-custom-black bg-custom-label-bg"
          : type === "text"
          ? "px-2 text-xs text-custom-black"
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

export default Td;
