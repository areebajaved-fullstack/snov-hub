import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
  AdminAIagentNavIcon,
  AdminActiveAgent,
  DashboardCardAlertIcon,
  DashboardCardDealsIcon,
  DashboardCardEscrowIcon,
  DashboardCardRevenueIcon,
  DashboardCardUsersIcon,
} from "../../../../assets/icons";

// Dashboard Cards Container Component
const DashboardCardsContainer = () => {
  const cards = [
    {
      title: "Total Agents",
      value: "4",
      percentage: "18%",
      trendLabel: "+89 this month",
      icon: AdminAIagentNavIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
    {
      title: "Active Agents",
      value: "3",
      percentage: "12%",
      trendLabel: "+24 this week",
      icon: AdminActiveAgent,
      iconBgClass: "bg-teal-500/10",
      iconClass: "text-teal-500",
    },
    {
      title: "Total Conversations",
      value: "4,230",
      percentage: "15%",
      trendLabel: "+18K",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-teal-500/10",
      iconClass: "text-teal-500",
    },
    {
      title: "Avg. Response Time",
      value: "2h",
      percentage: "22%",
      trendLabel: "Urgent",
      icon: DashboardCardEscrowIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
  ];

  return <DashboardCards cards={cards} />;
};


export default DashboardCardsContainer;
