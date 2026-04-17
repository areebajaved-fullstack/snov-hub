import React, { useState } from "react";
import ReusableTable from "../../../../components/ReusableTable";
import RowActionMenu from "./RowActionMenu";
import {
  AdminKnowledgebaseNavIcon,
  KnowledgeBaseFileIcon,
  KnowledgeBaseWebsiteIcon,
  KnowledgeBaseActionIcon,
} from "../../../../assets/icons";

const AgentsTable = ({ onResync }) => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [activeRow, setActiveRow] = useState(null);

  const handleActionClick = (e, row, index) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Check if it's one of the last 3 rows to open the menu upwards
    const isBottomRow = index >= data.length - 3;
    
    // For last two rows, open upward with more space
    const topPosition = isBottomRow ? rect.top - 150 : rect.bottom + 8;
    
    setMenuPosition({
      top: topPosition,
      left: rect.right - 280
    });
    setActiveRow(row);
  };
  const columns = [
    {
      header: "Source",
      accessor: "name",
      width: "35%",
      render: (row) => {
        let Icon = KnowledgeBaseFileIcon;
        if (row.type === "Website") Icon = KnowledgeBaseWebsiteIcon;
        if (row.type === "Manual") Icon = AdminKnowledgebaseNavIcon;

        return (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-xl outline outline-1 outline-gray-100 flex items-center justify-center">
              <Icon className="w-4 h-4 text-slate-500" />
            </div>
            <span className="font-semibold text-slate-700 font-['Inter_Tight'] leading-5">
              {row.name}
            </span>
          </div>
        );
      },
    },
    {
      header: "Type",
      accessor: "type",
      width: "15%",
      render: (row) => (
        <span className="text-slate-500 font-normal font-['Inter_Tight'] leading-5">
          {row.type}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      width: "15%",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium font-['Inter_Tight'] leading-tight inline-flex items-center justify-center ${
            row.status === "Indexed"
              ? "bg-teal-500/10 text-teal-600"
              : "bg-[#FFF8E7] text-[#D97706]"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Size",
      accessor: "size",
      width: "20%",
      render: (row) => (
        <span className="text-slate-500 font-normal font-['Inter_Tight'] leading-5">
          {row.size}
        </span>
      ),
    },
    {
      header: "Action",
      accessor: "action",
      width: "15%",
      render: (row, index) => (
        <div 
          onClick={(e) => handleActionClick(e, row, index)}
          className="flex justify-start items-center ml-2 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
        >
          <KnowledgeBaseActionIcon className="w-5 h-5" />
        </div>
      ),
    },
  ];

  const data = [
    {
      name: "Product Documentation.pdf",
      type: "File",
      status: "Indexed",
      size: "2.4 MB",
    },
    {
      name: "https://company.com/faq",
      type: "Website",
      status: "Indexed",
      size: "48 pages",
    },
    {
      name: "https://company.com/faq",
      type: "Website",
      status: "Indexed",
      size: "48 pages",
    },
    {
      name: "Pricing FAQ",
      type: "Manual",
      status: "Indexed",
      size: "1.2 KB",
    },
    {
      name: "Pricing FAQ",
      type: "Manual",
      status: "Indexed",
      size: "1.2 KB",
    },
    {
      name: "API Reference.docx",
      type: "File",
      status: "Processing",
      size: "5.1 MB",
    },
    {
      name: "API Reference.docx",
      type: "File",
      status: "Processing",
      size: "5.1 MB",
    },
  ];

  return (
    <>
      <ReusableTable columns={columns} data={data} />
      
      <RowActionMenu 
        position={menuPosition}
        onClose={() => setMenuPosition(null)}
        onResync={() => {
          onResync(activeRow);
          setMenuPosition(null);
        }}
        onViewDetails={() => {
          onResync(activeRow);
          setMenuPosition(null);
        }}
        onDelete={() => {
          console.log("Delete row", activeRow);
          setMenuPosition(null);
        }}
      />
    </>
  );
};

export default AgentsTable;
