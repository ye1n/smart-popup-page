import React from "react";

type Props = {
  minWidth?: number;
  height?: number;
  className?: string;
  colWidths?: string[];
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({
  minWidth,
  height,
  className = "",
  colWidths,
  children,
}) => {
  return (
    <div
      className={`w-full border-t border-t-[#333333] overflow-auto ${className}`}
      style={{ height: height ? `${height}px` : "auto" }}
    >
      <table
        className="w-full"
        style={{ minWidth: minWidth ? `${minWidth}px` : "auto" }}
      >
        {colWidths && (
          <colgroup>
            {colWidths.map((width, index) => (
              <col key={index} style={{ width }} />
            ))}
          </colgroup>
        )}
        {children && children}
      </table>
    </div>
  );
};

export default Table;
