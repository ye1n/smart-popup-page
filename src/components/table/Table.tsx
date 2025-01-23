import React from "react";

type Props = {
  width?: string;
  height?: string;
  className?: string;
  colWidths?: string[];
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({
  width = "w-full",
  height = "",
  className = "",
  colWidths,
  children,
}) => {
  return (
    <div
      className={`border-t border-t-[#333333] overflow-auto ${className} ${height}`}
    >
      <table className={`${width}`}>
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
