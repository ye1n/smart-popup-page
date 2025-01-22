import React from "react";

type Props = {
  maxHeight?: string; //테이블 최대 높이, 초과시 스크롤 적용
  className?: string;
  colWidths?: string[];
  children?: React.ReactNode;
};

const Table: React.FC<Props> = ({
  maxHeight,
  className = "",
  colWidths,
  children,
}) => {
  return (
    <div
      className={`border-t border-t-[#333333] overflow-x-auto ${className} ${
        maxHeight ? `overflow-y-auto ${maxHeight}` : ""
      }`}
    >
      <table className="w-full">
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
