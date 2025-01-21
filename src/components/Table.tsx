type Props = {
  data: TableGroup;
  colWidths?: string[];
  className?: string;
};

type TableGroup = {
  headers: string[];
  rows: (string | number)[][];
};

const Table: React.FC<Props> = ({ data, colWidths, className = "" }) => {
  return (
    <div className={`border-t border-t-[#333333] ${className}`}>
      <table className="w-full">
        {colWidths && (
          <colgroup>
            {colWidths.map((width, index) => (
              <col key={index} style={{ width }} />
            ))}
          </colgroup>
        )}
        <thead>
          <tr className="divide-x divide-custom-label-line border-x border-custom-label-line">
            {data.headers.map((header, headerIndex) => (
              <th
                key={headerIndex}
                className="text-xs text-center text-custom-black bg-custom-label-bg"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border divide-y border-custom-form-line divide-custom-form-line">
          {data.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="divide-x bg-custom-white divide-custom-form-line"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="text-xs text-center text-custom-black"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
