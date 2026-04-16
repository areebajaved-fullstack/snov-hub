import PropTypes from "prop-types";
import {
  DashboardCardAlertIcon,
  DashboardCardDealsIcon,
  DashboardCardEscrowIcon,
  DashboardCardRevenueIcon,
  DashboardCardUsersIcon,
} from "../../assets/icons";

const defaultCards = [
  {
    title: "Total Platform Users",
    value: "1,450",
    percentage: "18%",
    trendLabel: "+89 this month",
    icon: DashboardCardUsersIcon,
    iconBgClass: "bg-indigo-500/10",
    iconClass: "text-indigo-500",
  },
  {
    title: "Active Marketplace Deals",
    value: "186",
    percentage: "12%",
    trendLabel: "+24 this week",
    icon: DashboardCardDealsIcon,
    iconBgClass: "bg-pink-500/10",
    iconClass: "text-pink-500",
  },
  {
    title: "Platform Revenue",
    value: "EUR142K",
    percentage: "15%",
    trendLabel: "+EUR18K",
    icon: DashboardCardRevenueIcon,
    iconBgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-500",
  },
  {
    title: "Total Escrow Funds",
    value: "EUR640K",
    percentage: "22%",
    trendLabel: "EUR85K pending",
    icon: DashboardCardEscrowIcon,
    iconBgClass: "bg-amber-500/10",
    iconClass: "text-amber-500",
  },
  {
    title: "Pending Verifications",
    value: "28",
    percentage: "0%",
    trendLabel: "Urgent",
    icon: DashboardCardAlertIcon,
    iconBgClass: "bg-red-500/10",
    iconClass: "text-red-500",
  },
];

const DashboardCardItem = ({
  title,
  value,
  percentage,
  trendLabel,
  icon: Icon,
  iconBgClass,
  iconClass,
  className,
  valueClassName,
}) => {
  return (
    <div data-layer="Background+Border+Shadow" className={`BackgroundBorderShadow  p-5 bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start ${className}`}>
      <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-start">
        <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start gap-2">
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="Human Escalation" className="HumanEscalation justify-center text-gray-500 text-sm font-normal font-['Inter_Tight'] leading-5">{title}</div>
          </div>
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="12.7%" className="7 justify-center text-slate-900 text-2xl font-medium font-['Inter_Tight'] leading-8">{value}</div>
          </div>
        </div>
        <div data-layer="Overlay" className={`Overlay size-10 ${iconBgClass} rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-100 flex justify-center items-center`}>
          <div data-svg-wrapper data-layer="SVG" className={`Svg relative ${iconClass}`}>
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCards = ({
  cards,
  title,
  value,
  percentage = "12%",
  trendLabel = "",
  icon,
  iconBgClass = "bg-slate-100",
  iconClass = "text-slate-700",
  className = "",
  valueClassName = "",
}) => {
  const hasSingleCardInput = Boolean(title || value);

  const resolvedCards =
    Array.isArray(cards) && cards.length
      ? cards
      : hasSingleCardInput
        ? [
          {
            title,
            value,
            percentage,
            trendLabel,
            icon,
            iconBgClass,
            iconClass,
            className,
            valueClassName,
          },
        ]
        : defaultCards;

  const hasSingleCardMode = resolvedCards.length === 1;

  if (hasSingleCardMode) {
    return <DashboardCardItem {...resolvedCards[0]} />;
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resolvedCards.map((card, index) => (
          <DashboardCardItem key={`${card.title || "card"}-${index}`} {...card} />
        ))}
      </div>
    </section>
  );
};

DashboardCardItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.string,
  trendLabel: PropTypes.string,
  icon: PropTypes.elementType,
  iconBgClass: PropTypes.string,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  valueClassName: PropTypes.string,
};

DashboardCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(DashboardCardItem.propTypes)),
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.string,
  trendLabel: PropTypes.string,
  icon: PropTypes.elementType,
  iconBgClass: PropTypes.string,
  iconClass: PropTypes.string,
  className: PropTypes.string,
  valueClassName: PropTypes.string,
};

export default DashboardCards;
