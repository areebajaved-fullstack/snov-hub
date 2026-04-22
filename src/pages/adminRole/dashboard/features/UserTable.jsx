import React from "react";
import ReusableTable from "../../../../components/ReusableTable";

const UserTable = () => {

  const columns = [
    { header: "User", accessor: "email", width: "35%" },
    { header: "Ai Agent", accessor: "agent", width: "20%" },
    { header: "Last Activity", accessor: "lastActivity", width: "25%" },
    {
      header: "Status",
      accessor: "status",
      width: "20%",
      render: (row) => {
        const styles = {
          Resolved: "bg-teal-600/10 text-teal-600",
          Pending: "bg-amber-500/10 text-amber-500",
          Escalated: "bg-red-500/10 text-red-500",
        };

        return (
          <span className={`px-3 py-1 rounded-full text-xs ${styles[row.status]}`}>
            {row.status}
          </span>
        );
      },
    },
  ];

  const data = [
    {
      email: "liammartin@gmail.com",
      agent: "Sales Bot",
      lastActivity: "2 hours ago",
      status: "Resolved",
    },
    {
      email: "alexander-lee@outlook.com",
      agent: "Support AI",
      lastActivity: "2 hours ago",
      status: "Pending",
    },
    {
      email: "mason_smith@protonmail.com",
      agent: "Onboarding Bot",
      lastActivity: "5 hours ago",
      status: "Escalated",
    },
    {
      email: "mia.jones@designstudio.com",
      agent: "FAQ Bot",
      lastActivity: "3 days ago",
      status: "Escalated",
    },
  ];

  return (
    <div className="w-full">
      <ReusableTable columns={columns} data={data} />
    </div>
  );
};

export default UserTable;