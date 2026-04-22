import React from "react";

const TopQuestionsGraph = ({ data = [] }) => {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="relative w-[518px] h-[224px]">
      
      {/* Grid Horizontal */}
      {[0, 36, 72, 108, 144, 180].map((top, i) => (
        <div
          key={i}
          className="absolute left-[117px] w-[348px] border-t border-dashed border-gray-200"
          style={{ top }}
        />
      ))}

      {/* Grid Vertical */}
      {[0, 87, 174, 261, 348].map((x, i) => (
        <div
          key={i}
          className="absolute top-0 h-[180px] border-l border-dashed border-gray-200"
          style={{ left: 117 + x }}
        />
      ))}

      {/* Axis */}
      <div className="absolute left-[117px] top-[180px] w-[348px] border-t border-gray-500" />
      <div className="absolute left-[117px] top-0 h-[180px] border-l border-gray-500" />

      {/* X Axis Labels */}
      {[0, 90, 180, 270, 360].map((val, i) => (
        <div
          key={i}
          className="absolute top-[185px] text-xs text-gray-500"
          style={{ left: 113 + (i * 87) }}
        >
          {val}
        </div>
      ))}

      {/* Y Labels + Bars */}
      {data.map((item, index) => {
        const top = index * 36 + 4;
        const barWidth = (item.value / maxValue) * 330;

        return (
          <div key={index}>
            
            {/* Label */}
            <div
              className="absolute text-[9px] text-gray-500 text-right leading-tight"
              style={{
                top,
                left: 0,
                width: 100,
              }}
            >
              {item.label}
            </div>

            {/* Small tick */}
            <div
              className="absolute w-[6px] border-t border-gray-500"
              style={{
                top: top + 12,
                left: 111,
              }}
            />

            {/* Bar */}
            <div
              className="absolute left-[117px] h-[28px] rounded-r-md"
              style={{
                top,
                width: barWidth,
                background:
                  "linear-gradient(180deg, #3FA284 0%, #114F38 100%)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TopQuestionsGraph;