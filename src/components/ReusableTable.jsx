import React from "react";

/**
 * ReusableTable Component
 * 
 * @param {Array} columns - Array of column definitions: { header: string, accessor: string, render: function, width: string }
 * @param {Array} data - Array of data objects to display
 * @param {string} className - Additional CSS classes for the container
 */
const ReusableTable = ({ columns, data, className = "" }) => {
  return (
    <div 
      className={`w-full bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100/50 border-b border-gray-200 h-12">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="px-6 text-left text-gray-500 text-xs font-semibold font-['Inter_Tight'] leading-4 tracking-wider"
                  style={{ width: col.width }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data && data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className="h-16 hover:bg-gray-50/50 transition-colors duration-200"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 text-sm text-slate-900 font-['Inter_Tight'] leading-5"
                    >
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={columns.length} 
                  className="h-32 text-center text-gray-400 font-['Inter_Tight']"
                >
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
