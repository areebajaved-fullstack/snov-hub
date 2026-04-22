import React from "react";

const SentimentPieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const radius = 70;
  const innerRadius = 42; // donut thickness control
  const center = 80;

  let startAngle = 0;

  const createArc = (start, end, color) => {
    const largeArc = end - start > Math.PI ? 1 : 0;

    const x1 = center + radius * Math.cos(start);
    const y1 = center + radius * Math.sin(start);

    const x2 = center + radius * Math.cos(end);
    const y2 = center + radius * Math.sin(end);

    const x3 = center + innerRadius * Math.cos(end);
    const y3 = center + innerRadius * Math.sin(end);

    const x4 = center + innerRadius * Math.cos(start);
    const y4 = center + innerRadius * Math.sin(start);

    return `
      M ${x1} ${y1}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
      L ${x3} ${y3}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
      Z
    `;
  };

  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <g transform="rotate(-90 80 80)">
        {data.map((item, index) => {
          const angle = (item.value / total) * 2 * Math.PI;

          const endAngle = startAngle + angle;

          const path = createArc(startAngle, endAngle, item.color);

          startAngle = endAngle;

          return (
            <path
              key={index}
              d={path}
              fill={item.color}
              stroke="#ffffff"   // 👈 gap between segments
              strokeWidth="2"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default SentimentPieChart;