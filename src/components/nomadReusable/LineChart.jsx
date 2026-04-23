import React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

const LineChart = ({
  title = "Conversation Volume",
  subtitle = "7-Day Activity Cycle",
  data = [],
  dataKeys = ["conversations"],
  colors = ["#3FA284"],
  xAxisKey = "day",
  yAxisFormatter = (value) => `${value}`,
  yAxisDomain = [0, 280],
  yAxisTicks = [0, 70, 140, 210, 280],
}) => {

  const defaultData = [
    { day: "Mon", conversations: 180 },
    { day: "Tue", conversations: 240 },
    { day: "Wed", conversations: 130 },
    { day: "Thu", conversations: 210 },
    { day: "Fri", conversations: 280 },
    { day: "Sat", conversations: 140 },
    { day: "Sun", conversations: 110 },
  ]

  const chartData = data.length ? data : defaultData

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4 font-poppins">
      
      {/* Header */}
      <div className="self-stretch flex flex-col justify-start items-start">
        
        {/* Title */}
        <div className=" text-sm font-medium  text-[#0F1729] leading-5 font-poppins mb-2">
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div className="text-[#6B7280] text-xs leading-4 mt-1 font-poppins mb-2">
            {subtitle}
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={chartData}
            margin={{ top: 10, right: 30, left: -5, bottom: 0 }}
          >

            {/* Grid */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={yAxisTicks}
              domain={yAxisDomain}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
              tickFormatter={yAxisFormatter}
            />

            {/* X Axis */}
            <XAxis
              dataKey={xAxisKey}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            {/* ✅ AREA with REAL SHADOW */}
            <Area
              type="monotone"
              dataKey={dataKeys[0]}
              stroke="none"
              fill="url(#areaGradient)"
              filter="url(#shadowBlur)"
            />

            {/* ✅ LINE */}
            <Line
              type="monotone"
              dataKey={dataKeys[0]}
              stroke="#114F38"
              strokeWidth={3}
              dot={false}
            />

            {/* ✅ DEFINITIONS */}
            <defs>

              {/* Gradient */}
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#114F38" stopOpacity={0.9} />
                <stop offset="30%" stopColor="#2F7A63" stopOpacity={0.5} />
                <stop offset="70%" stopColor="#3FA284" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#3FA284" stopOpacity={0} />
              </linearGradient>

              {/* 🔥 REAL BLUR SHADOW */}
              <filter id="shadowBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>

            </defs>

          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default LineChart