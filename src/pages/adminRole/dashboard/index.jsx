import React, { useState } from "react";
import DashboardCardsContainer from "./features/dashboardCard";
import BarGraph from "../../../components/BarGraph";
import LineChart from "../../../components/nomadReusable/LineChart";
// import ReusableDataTable from "../../../components/ReusableDataTable";
import MonthlyUsage from "./features/MonthlyUsage";
import WelcomeComponent from "./features/WelcomeComponent";
import CreateAgentModal from "../commonpages/CreateAgentModal";
import TestBotModal from "./features/TestBotModal";
import UserTable from "./features/UserTable";
const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTestBotOpen, setIsTestBotOpen] = useState(false);

  const transactionVolumeData = [
    { value: 120, time: "2pm" },
    { value: 180, time: "4pm" },
    { value: 240, time: "6pm" },
    { value: 200, time: "8pm" },
    { value: 160, time: "10pm" },
    { value: 140, time: "12am" },
    { value: 100, time: "2am" },
    { value: 80, time: "4am" },
    { value: 60, time: "6am" },
  ];

  const platformGrowthData = [
    { days: "Mon", companies: 120, recruiters: 80 },
    { days: "Tue", companies: 180, recruiters: 120 },
    { days: "Wed", companies: 240, recruiters: 180 },
    { days: "Thur", companies: 200, recruiters: 140 },
    { days: "Fri", companies: 160, recruiters: 100 },
    { days: "Sat", companies: 100, recruiters: 60 },
    { days: "Sun", companies: 60, recruiters: 40 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden m-0 p-0">

      {/* MAIN WRAPPER (NO EXTRA SPACE NOW) */}
      <div className="w-full flex flex-col gap-3 pt-0 mt-0">

        {/* WELCOME SECTION */}
        <div className="w-full rounded-[1.5rem] pt-0 mt-0 pb-2">
          <WelcomeComponent
            onNewAgentClick={() => setIsModalOpen(true)}
            onTestBotClick={() => setIsTestBotOpen(true)}
          />
        </div>

        {/* DASHBOARD CARDS */}
        <DashboardCardsContainer />

        {/* MODALS */}
        <CreateAgentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <TestBotModal
          isOpen={isTestBotOpen}
          onClose={() => setIsTestBotOpen(false)}
        />

        {/* MONTHLY USAGE */}
        <MonthlyUsage />

        {/* GRAPHS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <LineChart
            title="Conversation Volume"
            subtitle=" 7-Day Activity Cycle"
            data={platformGrowthData}
            dataKeys={["companies"]}
            dataLabels={["Companies"]}
            colors={["#3FA284", "#114F38"]}
            xAxisKey="days"
            yAxisDomain={[0, 280]}
            yAxisTicks={[0, 70, 140, 210, 280,]}
            yAxisFormatter={(value) => `${value}`}
            showDropdowns={true}
            currency=""
            showLegend={true}
            height={288}
          />

          <BarGraph
            title="Peak Hours"
            subtitle="Average Hourly Heat"
            data={transactionVolumeData}
            dataKeys={["value"]}
            dataLabels={["GMV"]}
            colors={["#3FA284", "#114F38"]}
            yAxisDomain={[0, 100]}
            yAxisTicks={[0, 25, 50, 75, 100]}
            yAxisFormatter={(value) => `${value}`}
            height={327}
            showDropdowns={true}
          />

        </div>
<UserTable/>
        
      </div>
    </div>
  );
};

export default AdminDashboard;