import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const BarGraph = ({
  title = "Peak Hours",
  subtitle = "",
  data = [],
  dataKeys = ["value"],
  dataLabels = ["Peak Hours"],
  colors = ["#3FA284"],
  xAxisKey = "time",
  yAxisDomain = [0, 100],
  yAxisTicks = [0, 25, 50, 75, 100],
  yAxisFormatter = (value) => `${value}`,
  height = 240,
  showTooltip = false,
  showDropdowns = false,
  showLegend = false,
}) => {

  const defaultData = [
    { time: "6am", value: 12 },
    { time: "8am", value: 45 },
    { time: "10am", value: 78 },
    { time: "12pm", value: 65 },
    { time: "2pm", value: 82 },
    { time: "4pm", value: 70 },
    { time: "6pm", value: 45 },
    { time: "8pm", value: 30 },
    { time: "10pm", value: 15 },
  ];

  const chartData = data.length > 0 ? data : defaultData;
  const isSingleSeries = dataKeys.length === 1;


  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4 font-poppins">
      {/* Header */}
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="text-slate-900 text-sm font-semibold font-poppins leading-5">{title}</div>
      </div>

      {/* Chart Container */}
      <div className="self-stretch h-60 flex flex-col justify-center items-start">
        <div className="self-stretch flex-1 relative overflow-hidden">

          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              data={chartData}
              margin={{
                top: 4,
                right: 10,
                left: 5,
                bottom: 10,
              }}
              barCategoryGap="25%"
            >
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#6B7280",
                  fontSize: 12,
                  fontWeight: 400,
                }}
                width={35}
                allowDecimals={false}
                domain={yAxisDomain}
                ticks={yAxisTicks}
                tickFormatter={yAxisFormatter}
              />

              <CartesianGrid 
                strokeDasharray="2 2" 
                stroke="#E5E7EB" 
                vertical={true} 
                horizontal={true}
              />

              <XAxis
                dataKey={xAxisKey}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#6B7280",
                  fontSize: 12,
                  fontWeight: 400,
                }}
              />

              <Bar dataKey={dataKeys[0]} radius={[6, 6, 0, 0]} barSize={39}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${entry[xAxisKey]}-${index}`}
                    fill="url(#peakHoursGradient)"
                  />
                ))}
              </Bar>
              
              <defs>
                <linearGradient id="peakHoursGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#3FA284" />
                  <stop offset="1" stopColor="#114F38" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
