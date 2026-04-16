import React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceArea,
} from 'recharts'

const LineChart = ({
  title = "Conversation Volume",
  subtitle = "",
  data = [],
  dataKeys = ["conversations"],
  dataLabels = ["Conversations"],
  colors = ["#3FA284"],
  xAxisKey = "day",
  yAxisFormatter = (value) => `${value}`,
  yAxisDomain = [0, 280],
  yAxisTicks = [0, 70, 140, 210, 280],
  height = 240,
  showTooltip = false,
  showLegend = false,
  showDropdowns = false,
  legendFlexCol,
  dropdownOptions,
  onYearChange,
  onPeriodChange,
  highlightPeriod = null,
  currency = "",
  showThreeDots = false,
}) => {

  // Sample data structure if none provided
  const defaultData = [
    { day: "Mon", conversations: 180 },
    { day: "Tue", conversations: 220 },
    { day: "Wed", conversations: 160 },
    { day: "Thu", conversations: 200 },
    { day: "Fri", conversations: 140 },
    { day: "Sat", conversations: 100 },
    { day: "Sun", conversations: 80 },
  ]

  const chartData = data.length > 0 ? data : defaultData


  // Find highlight period indices
  const getHighlightIndices = () => {
    if (!highlightPeriod) return null

    const startIndex = chartData.findIndex(
      (item) => item[xAxisKey] === highlightPeriod.start
    )
    const endIndex = chartData.findIndex(
      (item) => item[xAxisKey] === highlightPeriod.end
    )

    if (startIndex === -1 || endIndex === -1) return null

    return { start: startIndex, end: endIndex }
  }

  const highlightIndices = getHighlightIndices()

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4 font-poppins">
      {/* Header */}
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="text-slate-900 text-sm font-semibold font-poppins leading-5">{title}</div>
      </div>

      {/* Chart Container */}
      <div className="self-stretch h-60 flex flex-col justify-center items-center">
        <div className="w-full flex-1 relative overflow-hidden">
          <ResponsiveContainer width="100%" height={240}>
            <RechartsLineChart
              data={chartData}
              margin={{
                top: 24,
                right: 10,
                left: 5,
                bottom: 10,
              }}
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
              strokeDasharray="3 3" 
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

            {highlightIndices && (
              <ReferenceArea
                x1={highlightPeriod.start}
                x2={highlightPeriod.end}
                fill="#6366F1"
                fillOpacity={0.08}
              />
            )}

            {dataKeys.map((key, index) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[index] || "#3FA284"}
                strokeWidth={2}
                dot={false}
                connectNulls={false}
              />
            ))}
            <defs>
              <linearGradient id="gradient0" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                <stop offset="0.05" stopColor="#3FA284" />
                <stop offset="0.95" stopColor="#3FA284" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </RechartsLineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default LineChart
