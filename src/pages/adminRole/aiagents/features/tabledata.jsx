import React from "react";
import ReusableTable from "../../../../components/ReusableTable";
import {  DashboardCardDealsIcon } from "../../../../assets/icons";

const AgentsTable = () => {
  const columns = [
    {
      header: "Agent",
      accessor: "name",
      width: "30%",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-xl outline outline-1 outline-gray-100 flex items-center justify-center">
            < DashboardCardDealsIcon className="w-4 h-4 text-[#3FA284]" />
          </div>
          <span className="font-medium text-slate-900 font-['Inter_Tight']">{row.name}</span>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      width: "15%",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium font-['Inter_Tight'] ${
            row.status === "Live"
              ? "bg-teal-600/10 text-teal-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    { header: "Model", accessor: "model", width: "15%" },
    { header: "Conversations", accessor: "conversations", width: "20%" },
    { header: "Last Updated", accessor: "lastUpdated", width: "20%" },
  ];

  const data = [
    {
      name: "Sales Bot",
      status: "Live",
      model: "GPT-4o",
      conversations: "1,240",
      lastUpdated: "2 hours ago",
    },
    {
      name: "Sales Bot",
      status: "Live",
      model: "GPT-4o",
      conversations: "1,240",
      lastUpdated: "2 hours ago",
    },
    {
      name: "Support AI",
      status: "Live",
      model: "Claude 3.5",
      conversations: "890",
      lastUpdated: "5 hours ago",
    },
    {
      name: "Support AI",
      status: "Live",
      model: "Claude 3.5",
      conversations: "890",
      lastUpdated: "5 hours ago",
    },
    {
      name: "Onboarding Bot",
      status: "Draft",
      model: "GPT-4o",
      conversations: "0",
      lastUpdated: "1 day ago",
    },
    {
      name: "Onboarding Bot",
      status: "Draft",
      model: "GPT-4o",
      conversations: "0",
      lastUpdated: "1 day ago",
    },
    {
      name: "FAQ Bot",
      status: "Live",
      model: "GPT-4o",
      conversations: "2,100",
      lastUpdated: "3 days ago",
    },
  ];

  return <ReusableTable columns={columns} data={data} />;
};

export default AgentsTable;
