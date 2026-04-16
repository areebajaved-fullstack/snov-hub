import React from "react";

const ReusableDataTable = ({
  title = "Recent Activity",
  data = [],
  className = "",
}) => {
  const defaultData = [
    { userId: "USR-4821", botName: "Sales Bot", time: "2 min ago", status: "Resolved" },
    { userId: "USR-4820", botName: "Support AI", time: "5 min ago", status: "Pending" },
    { userId: "USR-4819", botName: "Onboarding Bot", time: "12 min ago", status: "Resolved" },
    { userId: "USR-4818", botName: "Sales Bot", time: "18 min ago", status: "Escalated" },
    { userId: "USR-4817", botName: "Support AI", time: "25 min ago", status: "Resolved" },
    { userId: "USR-4816", botName: "FAQ Bot", time: "32 min ago", status: "Resolved" },
  ];

  const activityData = data.length > 0 ? data : defaultData;

  const getStatusBadge = (status) => {
    const statusConfig = {
      Resolved: { bg: "bg-teal-600/10", text: "text-teal-600" },
      Pending: { bg: "bg-amber-500/10", text: "text-amber-500" },
      Escalated: { bg: "bg-red-500/10", text: "text-red-500" },
    };
    
    const config = statusConfig[status] || statusConfig.Resolved;
    return (
      <div className={`w-20 h-5 ${config.bg} rounded-full flex items-center justify-center`}>
        <span className={`${config.text} text-xs font-normal font-poppins leading-4`}>
          {status}
        </span>
      </div>
    );
  };

  return (
    <div className={`w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-4 font-poppins ${className}`}>
      {/* Header */}
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="text-slate-900 text-sm font-medium font-poppins leading-5">{title}</div>
      </div>

      {/* Activity List */}
      <div className="Container self-stretch flex flex-col justify-start items-start gap-3">
        {activityData.map((activity, index) => (
          <div 
            key={index}
            className={`Horizontalborder self-stretch h-9 relative ${index < activityData.length - 1 ? 'border-b border-gray-200' : ''}`}
          >
            {/* User ID */}
            <div className="absolute left-0 top-[10px]">
              <span className="text-gray-500 text-xs font-normal font-poppins leading-4">
                {activity.userId}
              </span>
            </div>

            {/* Bot Name */}
            <div className="absolute left-[335px] top-[8px]">
              <span className="text-slate-900 text-sm font-normal font-poppins leading-5">
                {activity.botName}
              </span>
            </div>

            {/* Time */}
            <div className="absolute left-[679px] top-[10px]">
              <span className="text-gray-500 text-xs font-normal font-poppins leading-4">
                {activity.time}
              </span>
            </div>

            {/* Status Badge */}
            <div className="absolute left-[1020px] top-[8px]">
              {getStatusBadge(activity.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReusableDataTable;
