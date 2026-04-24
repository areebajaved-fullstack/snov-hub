import React, { useState, useRef, useEffect } from "react";
import ReusableTable from "../../../../components/ReusableTable";

const PAGE_SIZE = 6;

const agentsData = [
  {
    id: 1,
    name: "Sales Bot",
    status: "Active",
    model: "GPT-4o",
    conversations: "1,240",
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "Support AI",
    status: "Active",
    model: "Claude 3.5 Haiku",
    conversations: "890",
    updated: "5 hours ago",
  },
  {
    id: 3,
    name: "Support AI",
    status: "Active",
    model: "Claude 3.5 Sonnet",
    conversations: "890",
    updated: "5 hours ago",
  },
  {
    id: 4,
    name: "Onboarding Bot",
    status: "Archived",
    model: "GPT-4o Mini",
    conversations: "0",
    updated: "1 day ago",
  },
  {
    id: 5,
    name: "FAQ Bot",
    status: "Active",
    model: "GPT-4o Mini",
    conversations: "2,100",
    updated: "3 days ago",
  },
  {
    id: 6,
    name: "Marketing Bot",
    status: "Active",
    model: "GPT-4o",
    conversations: "540",
    updated: "1 hour ago",
  },
  {
    id: 7,
    name: "FAQ Bot",
    status: "Active",
    model: "GPT-4o Mini",
    conversations: "2,100",
    updated: "3 days ago",
  },
  {
    id: 8,
    name: "Marketing Bot",
    status: "Active",
    model: "GPT-4o",
    conversations: "540",
    updated: "1 hour ago",
  },
];

const AIBotIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
    <path
      d="M8 5V2.7H5.3"
      stroke="#3FA284"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <rect
      x="2.7"
      y="5.3"
      width="10.6"
      height="8"
      rx="1.5"
      stroke="#3FA284"
      strokeWidth="1.3"
    />
    <path
      d="M6 8.7V10M10 8.7V10"
      stroke="#3FA284"
      strokeWidth="1.3"
    />
  </svg>
);

const ActionsDropdown = ({ isOpen, isLastRows }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`absolute right-0 w-48 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-50 ${
        isLastRows ? "bottom-10" : "top-10"
      }`}
    >
      {[
        "View Details",
        "Test Bot",
        "Archive",
        "Duplicate",
        "Delete",
      ].map((action) => (
        <div
          key={action}
          className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer font-poppins"
        >
          {action}
        </div>
      ))}
    </div>
  );
};

const AgentsTable = () => {
  const [page, setPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const totalPages = Math.ceil(agentsData.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const currentData = agentsData.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const columns = [
    {
      header: "Agent",
      accessor: "name",
      width: "24%",
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center">
            <AIBotIcon />
          </div>

          <span className="text-sm font-medium text-slate-900 font-poppins">
            {row.name}
          </span>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      width: "14%",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium font-poppins ${
            row.status === "Active"
              ? "bg-teal-100 text-teal-600"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Model",
      accessor: "model",
      width: "20%",
    },
    {
      header: "Conversations",
      accessor: "conversations",
      width: "16%",
    },
    {
      header: "Last Updated",
      accessor: "updated",
      width: "16%",
    },
    {
      header: "Actions",
      accessor: "actions",
      width: "10%",
      render: (row) => {
        const rowIndex = currentData.findIndex(
          (item) => item.id === row.id
        );

        // last 3 rows dropdown upward open hoga
        const isLastRows =
          rowIndex >= currentData.length - 3;

        return (
          <div
            className="relative flex justify-end"
            ref={dropdownRef}
          >
            <button
              onClick={() => toggleDropdown(row.id)}
              className="text-xl text-gray-500 hover:text-gray-700"
            >
              ⋮
            </button>

            <ActionsDropdown
              isOpen={openDropdown === row.id}
              isLastRows={isLastRows}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-[#F1F3F4] overflow-hidden shadow-sm">
      {/* TABLE */}
      <ReusableTable
        columns={columns}
        data={currentData}
        className="!rounded-none"
      />

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 bg-[#F1F3F4]">
        {/* Left Text */}
        <div className="text-sm text-gray-500 font-poppins">
          Showing {start + 1} to{" "}
          {Math.min(start + PAGE_SIZE, agentsData.length)} of{" "}
          {agentsData.length}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="h-9 px-4 rounded-lg border border-black bg-white text-sm font-medium text-black font-poppins hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="h-9 px-4 rounded-lg bg-[#062B2B] text-white text-sm font-medium font-poppins hover:opacity-90 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentsTable;