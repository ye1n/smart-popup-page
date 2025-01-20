import React from "react";

type Props = {
  className?: string;
  colWidths?: string[];
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({ children, colWidths, className = "" }) => {
  return (
    <div className={`border-t border-t-[#333333] ${className}`}>
      <table className="w-full break-keep">
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
