type Props = {
  data: TableGroup;
  colWidths?: string[];
};

type TableGroup = {
  headers: string[];
  rows: (string | number)[][];
};

const Table: React.FC<Props> = ({ data, colWidths }) => {
  return (
    <div className="border-t border-t-[#333333]">
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
                className="pb-0.5 pt-1 text-xs text-center text-custom-black bg-custom-label-bg"
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
              className="bg-white divide-x divide-custom-form-line"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="pb-0.5 pt-1 text-xs text-center text-custom-black"
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
