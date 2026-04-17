import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  AdminFilesSource,
  AdminProcessing,
  DashboardCardRevenueIcon,
  DashboardCardUsersIcon,
} from "../../../../assets/icons";

// Dashboard Cards Container Component
const DashboardCardsContainer = () => {
  const cards = [
    {
      title: "Total Sources",
      value: "5",
      percentage: "18%",
      trendLabel: "+2 today",
      icon: DashboardCardUsersIcon,
      iconBgClass: "bg-[#F6F8F8]",
      iconClass: "text-[#3FA284]",
    },
    {
      title: "Indexed Sources",
      value: "3",
      percentage: "12%",
      trendLabel: "+12 this week",
      icon: AdminProcessing,
      iconBgClass: "bg-[#F6F8F8]",
      iconClass: "text-[#3FA284]",
    },
    {
      title: "Processing Sources",
      value: "1",
      percentage: "15%",
      trendLabel: "Success",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-[#F6F8F8]",
      iconClass: "text-[#3FA284]",
    },
    {
      title: "Failed Sources",
      value: "1",
      percentage: "22%",
      trendLabel: "Optimized",
      icon: AdminFilesSource,
      iconBgClass: "bg-red-500/10",
      iconClass: "text-red-500",
    },
  ];

  return <DashboardCards cards={cards} />;
};

export default DashboardCardsContainer;
