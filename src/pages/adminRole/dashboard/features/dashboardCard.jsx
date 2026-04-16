import React from "react";
import DashboardCards from "../../../../components/nomadReusable/DashboardCards";

import {
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
      title: "Total Conversations",
      value: "3,842",
      icon: DashboardCardUsersIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
    {
      title: "AI Resolution Rate",
      value: "87.3%",
      percentage: "12%",
      trendLabel: "+24 this week",
      icon: DashboardCardDealsIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
    {
      title: "Human Escalation",
      value: "12.7%",
      percentage: "15%",
      trendLabel: "+€18K",
      icon: DashboardCardRevenueIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
    {
      title: "Avg. Response Time",
      value: "1.2s",
      percentage: "22%",
      trendLabel: "€85K pending",
      icon: DashboardCardEscrowIcon,
      iconBgClass: "bg-tale-500/10",
      iconClass: "text-tale-500",
    },
    
  ];

  return (
    <DashboardCards cards={cards} />
  );
};

export default DashboardCardsContainer;
