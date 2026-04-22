import React from "react";

const ReusableTable = ({ columns, data, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>

      {/* ✅ DESKTOP / TABLET TABLE */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-200 overflow-hidden">

          {/* HEADER */}
          <thead>
            <tr className="bg-gray-100/50 border-b border-gray-200 h-12">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-6 text-left text-gray-500 text-xs font-medium font-poppins"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="h-16 border-b border-gray-200 last:border-none hover:bg-gray-50"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 text-sm text-slate-900 font-poppins"
                  >
                    {col.render
                      ? col.render(row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MOBILE CARD VIEW */}
      <div className="md:hidden flex flex-col gap-3">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-4"
          >
            {columns.map((col, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-1"
              >
                <span className="text-gray-500 text-xs font-poppins">
                  {col.header}
                </span>

                <span className="text-slate-900 text-sm font-poppins text-right">
                  {col.render
                    ? col.render(row)
                    : row[col.accessor]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ReusableTable;