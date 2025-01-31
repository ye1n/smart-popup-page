import React from "react";

type Props = {
  minWidth?: number;
  width?: number;
  height?: number;
  className?: string;
  borderTop?: boolean;
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({
  minWidth,
  width,
  height,
  className = "",
  borderTop = false,
  children,
}) => {
  return (
    <div
      className={`overflow-auto ${className} ${
        borderTop ? "border-t border-t-[#333333]" : ""
      }`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "auto",
      }}
    >
      <table
        className={`w-full ${
          !borderTop ? "border-t border-custom-form-line" : ""
        }`}
        style={{ minWidth: minWidth ? `${minWidth}px` : "auto" }}
      >
        {children && children}
      </table>
    </div>
  );
};

export default Table;
