import React, { useState } from "react";
import DashboardCardsContainer from "./features/dashboardCard";
import BarGraph from "../../../components/BarGraph";
import LineChart from "../../../components/nomadReusable/LineChart";
import SectionHeader from "../../../components/nomadReusable/SectionHeader";
import ReusableDataTable from "../../../components/ReusableDataTable";
import MonthlyUsage from "./features/MonthlyUsage";
import WelcomeComponent from "./features/WelcomeComponent";
import CreateAgentModal from "./features/CreateAgentModal";
// import PendingFlag from "./features/pendingFlag";

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="space-y-6 max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-12 space-y-6">
          
            <div className=" w-full rounded-[1.5rem]">
              <WelcomeComponent onNewAgentClick={() => setIsModalOpen(true)} />
            </div>

            <div className="rounded-[1.5rem]">
              <DashboardCardsContainer />
            </div>

            <CreateAgentModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />

            <div className="rounded-[1.5rem]">
              <MonthlyUsage />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 lg:gap-3">
              <div className="w-full">
              <LineChart
                title="Conversation Volume"
                subtitle="New Companies vs New Recruiters"
                data={platformGrowthData}
                dataKeys={["companies"]}
                dataLabels={["Companies"]}
         colors={["#3FA284", "#114F38", ]}
                xAxisKey="days"
                yAxisDomain={[0, 280]}
                yAxisTicks={[0, 50, 100, 150, 200, 250]}
                yAxisFormatter={(value) => `${value}`}
                showDropdowns={true}
                currency=""
                showLegend={true}
                height={288}
              />
              </div>

              <div className="w-full">
                <BarGraph
                  title="Transaction Volume"
                  subtitle="Monthly Gross Merchandise Value (GMV)"
                  data={transactionVolumeData}
                  dataKeys={["value"]}
                  dataLabels={["GMV"]}
                  colors={["#3FA284", "#114F38", ]}
                  yAxisDomain={[0, 250]}
                  yAxisTicks={[0, 50, 100, 150, 200, 250]}
                  yAxisFormatter={(value) => `${value}`}
                  height={327}
                  showDropdowns={true}
                />
              </div>
            </div>
            <div className="grid grid-cols-1  gap-4 lg:gap-3">
              <ReusableDataTable />
             
              </div>

             
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
