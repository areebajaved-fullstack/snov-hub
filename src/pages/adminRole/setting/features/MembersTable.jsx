import React from "react";
import ReusableTable from "../../../../components/ReusableTable";

const MembersTable = () => {
  
  // 🔹 Columns
  const columns = [
    {
      header: "Member",
      accessor: "name",
      width: "35%",
      render: (row) => {
        const initials = row.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

        return (
          <div className="flex items-center gap-3">
            
            {/* Avatar */}
            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-xs text-gray-600">
              {initials}
            </div>

            {/* Name */}
            <span className="font-medium text-slate-900">
              {row.name}
            </span>
          </div>
        );
      },
    },
    {
      header: "Email",
      accessor: "email",
      width: "40%",
      render: (row) => (
        <span className="text-gray-500">{row.email}</span>
      ),
    },
    {
      header: "Role",
      accessor: "role",
      width: "25%",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.role === "Admin"
              ? "bg-gray-200 text-gray-700"
              : row.role === "Manager"
              ? "bg-teal-100 text-teal-600 opacity-75"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {row.role}
        </span>
      ),
    },
  ];

  // 🔹 Data (Screenshot se)
  const data = [
    {
      name: "Liam Sophia",
      email: "madson.johnson@futuretech.com",
      role: "Admin",
    },
    {
      name: "Sophia Williams",
      email: "isabella-williams@protonmail.com",
      role: "Manager",
    },
    {
      name: "Benjamin Noah",
      email: "lucas_thomas@gmail.com",
      role: "Manager",
    },
    {
      name: "Noah Perez",
      email: "harper.taylor@designforge.com",
      role: "Manager",
    },
    {
      name: "Elijah Amelia",
      email: "isabella.thomas@techcorp.com",
      role: "Manager",
    },
    {
      name: "Benjamin Lee",
      email: "lucas.williams@designwave.com",
      role: "Agent",
    },
    {
      name: "Lucas Martin",
      email: "evelyn.jones@creativeminds.com",
      role: "Agent",
    },
    {
      name: "Harper Lucas",
      email: "emma.rodriguez@digitalcraft.com",
      role: "Agent",
    },
    {
      name: "Ava Jones",
      email: "charlotte.rodriguez@designwave.com",
      role: "Agent",
    },
    {
      name: "Benjamin Williams",
      email: "benjamin-moore@protonmail.com",
      role: "Agent",
    },
  ];

  return <ReusableTable columns={columns} data={data} />;
};

export default MembersTable;