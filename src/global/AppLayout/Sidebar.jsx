"use client";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { persistor } from "../../store";
import {
  AdminDashboardNavIcon,
  AdminAIagentNavIcon,
  AdminKnowledgebaseNavIcon,
  AdminHumanResource,
   AdminChannelNavIcon ,
   AdminRealAnalyticsNavIcon,
  RoleDashboardGridIcon,
  RoleProfileIcon,
  RoleChatIcon,
  LogoutIcon,
  XIcon,
} from "../../assets/icons";
import { LogoIcon } from "../../assets/icons";

function Sidebar({ isMobileSidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileSidebarOpen &&
        !event.target.closest(".sidebar-content") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        toggleSidebar();
      }
    };

    if (isMobileSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when mobile sidebar is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore scrolling when mobile sidebar is closed
      document.body.style.overflow = "unset";
    };
  }, [isMobileSidebarOpen, toggleSidebar]);

  // React Icons for sidebar navigation

  const getRoleBasedMenuItems = (role) => {
    const menu = {
      admin: {
        main: [
          { path: "/admin/dashboard", name: "Dashboard", icon: AdminDashboardNavIcon },
         
          { path: "/admin/ai-agents", name: "AI agents", icon: AdminAIagentNavIcon },
          { path: "/admin/knowledge-base", name: "Knowledge base", icon: AdminKnowledgebaseNavIcon },
          { path: "/admin/humanInbox", name: "Human Inbox", icon: AdminHumanResource },
          { path: "/admin/channels", name: "Channels", icon: AdminChannelNavIcon },
         { path: "/admin/analytics", name: "Analytics", icon: AdminRealAnalyticsNavIcon },
         { divider: true },
         { path: "/admin/team", name: "Team", icon: AdminRealAnalyticsNavIcon },
         { path: "/admin/setting", name: "Settings", icon: AdminRealAnalyticsNavIcon },
        ],
        bottom: [],
      },
      agency: {
        main: [
          { path: "/agency/dashboard", name: "Dashboard", icon: RoleDashboardGridIcon },
          { path: "/agency/profile", name: "Profile", icon: RoleProfileIcon },
          { path: "/agency/chat", name: "Chat", icon: RoleChatIcon },
        ],
        bottom: [],
      },
      company: {
        main: [
          { path: "/company/dashboard", name: "Dashboard", icon: RoleDashboardGridIcon },
          { path: "/company/profile", name: "Profile", icon: RoleProfileIcon },
          { path: "/company/chat", name: "Chat", icon: RoleChatIcon },
        ],
        bottom: [],
      },
      recruiter: {
        main: [
          { path: "/recruiter/dashboard", name: "Dashboard", icon: RoleDashboardGridIcon },
          { path: "/recruiter/profile", name: "Profile", icon: RoleProfileIcon },
          { path: "/recruiter/chat", name: "Chat", icon: RoleChatIcon },
        ],
        bottom: [],
      },
    };

    return menu[role] || {};
  };
  const currentUser = useSelector((state) => state.auth.user);
  const currentRole = currentUser?.role;

  // Extract role from URL path as fallback
  const getRoleFromPath = (pathname) => {
    if (pathname.startsWith("/admin")) return "admin";
    if (pathname.startsWith("/agency")) return "agency";
    if (pathname.startsWith("/company")) return "company";
    if (pathname.startsWith("/recruiter")) return "recruiter";
    return null;
  };

  // Use URL-based role detection first, then Redux role as fallback
  const urlBasedRole = getRoleFromPath(location.pathname);
  const detectedRole = urlBasedRole || currentRole;

  const validRoles = ["admin", "agency", "company", "recruiter"];
  const roleName = validRoles.includes(detectedRole) ? detectedRole : null;
  const finalRoleName = roleName || "admin";
  const roleLabel = finalRoleName === "admin" ? "" : finalRoleName.charAt(0).toUpperCase() + finalRoleName.slice(1);

  const rawUserName =
    currentUser?.name ||
    currentUser?.fullName ||
    currentUser?.firstName ||
    currentUser?.username ||
    currentUser?.email?.split("@")[0] ||
    "SnovHub";

  const firstWord = rawUserName.trim().split(/\s+/)[0] || "S";
  const userInitial = firstWord.charAt(0).toUpperCase();
  const brandTitle = "SnovHub";

  const menuItems = getRoleBasedMenuItems(finalRoleName);

  // Fallback for testing - if no role is detected, show appropriate menu based on URL
  const finalMenuItems = menuItems?.main
    ? menuItems
    : location.pathname.startsWith("/agency")
      ? getRoleBasedMenuItems("agency")
      : location.pathname.startsWith("/company")
        ? getRoleBasedMenuItems("company")
        : location.pathname.startsWith("/recruiter")
          ? getRoleBasedMenuItems("recruiter")
          : getRoleBasedMenuItems("admin");

  // Utility function to render NavLink items
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    navigate("/login");
  };
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const handleClickMobile = () => {
    if (isMobile) {
      toggleSidebar(); // your custom function
    }
  };

  const toggleMenuExpansion = (parentName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [parentName]: !prev[parentName],
    }));
  };
  const renderNavLink = (item, extraClasses = "") => {
    // Check if this item should be active based on current location
    const isActive =
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + "/");

    return (
      <div
        onClick={() => {
          handleClickMobile();
          // Navigate to the item path using React Router
          navigate(item.path);
        }}
        className={`
          flex items-center w-full h-[48px] pl-[10px] pr-4 gap-[10px] group transition-all duration-200 relative rounded-[10px] cursor-pointer
          ${isActive
            ? "bg-[#3FA284] text-white shadow-lg shadow-[#3FA284]/25"
            : "text-white/70 hover:bg-[#3FA284]/15 hover:text-white hover:translate-x-1"
          }
          ${extraClasses}
        `}
      >
        {/* Active state left indicator bar */}
        {/* {isActive && (
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#14F195] to-[#9945FF] rounded-l-md"></div>
        )} */}

        {/* Only show icon if item has no parent (not a nested item) */}
        {!item.parent && item.icon && (
          <div
            className={`w-5 h-5 flex items-center justify-center ${isActive ? "text-white" : "text-white/70 hover:text-white"
              }`}
          >
            <item.icon />
          </div>
        )}
        <span className="text-base font-normal leading-5  ">
          {item.name}
        </span>
        {item.badge && (
          <span className="ml-auto bg-white/20 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {item.badge}
          </span>
        )}
      </div>
    );
  };

  const renderSidebarContent = () => {
    // Group menu items by parent for nested structure
    const groupedMenuItems = {};
    const standaloneItems = [];
    const processedParents = new Set();

    finalMenuItems?.main?.forEach((item) => {
      if (item.parent) {
        if (!groupedMenuItems[item.parent]) {
          groupedMenuItems[item.parent] = [];
        }
        groupedMenuItems[item.parent].push(item);
      } else {
        standaloneItems.push(item);
      }
    });

    return (
      <div className="sidebar-content w-[18.5625rem] bg-primary flex flex-col h-[100vh] relative py-0 sm:py-0">
        <div className=" rounded-lg flex flex-col h-full">
          {/* Mobile close button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white/70 hover:text-white md:hidden z-50"
          >
            <XIcon size={20} />
          </button>

          {/* Brand Section */}
          <div data-layer="Container" className="Container self-stretch px-4 py-8 inline-flex flex-col justify-start items-start">
            <div data-layer="Logo" className="Logo size- inline-flex justify-start items-center gap-2">
              <div data-svg-wrapper data-layer="Logo" className="Logo relative">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <LogoIcon className="w-[28px] h-[26px]" />
                </div>
              </div>
              <div data-layer="Jotter AI" className="JotterAi justify-start text-white text-xl font-bold font-['Inter_Tight'] leading-8 tracking-wide">{brandTitle}</div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="sidebar-nav-scroll flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 border-t border-[#FFFFFF1A] pt-4">
            <div className="space-y-1">
              {/* Render items in order, checking for parent groups */}
              {finalMenuItems?.main?.map((item, index) => {
                // Render divider if item is a divider
                if (item.divider) {
                  return <div key={`divider-${index}`} className="border-t border-white/10 my-2"></div>;
                }
                
                // If this item has a parent and we haven't processed this parent yet
                if (item.parent && !processedParents.has(item.parent)) {
                  processedParents.add(item.parent);
                  const children = groupedMenuItems[item.parent];
                  const hasActiveChild = children.some(
                    (child) =>
                      location.pathname === child.path ||
                      location.pathname.startsWith(child.path + "/")
                  );
                  const isExpanded = expandedMenus[item.parent];

                  return (
                    <div key={`parent-${item.parent}`} className="space-y-1">
                      {/* Parent header */}
                      <div
                        onClick={() => toggleMenuExpansion(item.parent)}
                        className={`flex items-center w-full h-[42px] pl-[10px] pr-4 gap-[10px] group transition-all duration-200 relative rounded-md cursor-pointer ${hasActiveChild
                          ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                          : "text-white/70 hover:bg-[#3FA284]/20 hover:text-white hover:translate-x-1"
                          }`}
                      >
                        <div
                          className={`w-5 h-5 flex items-center justify-center ${hasActiveChild ? "text-white" : "text-white/70"
                            }`}
                        >
                          <AdminDashboardNavIcon />
                        </div>
                        <span className="text-base font-normal leading-5  ">
                          {item.parent}
                        </span>
                        <div className="ml-auto">
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""
                              } ${hasActiveChild ? "text-white" : "text-white/70"
                              }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Children items - only show when expanded */}
                      {isExpanded && (
                        <div className="space-y-1">
                          {children.map((child, childIndex) => (
                            <div
                              key={`child-${item.parent}-${childIndex}`}
                              className="ml-6"
                            >
                              {renderNavLink(child, "text-sm")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // If this is a standalone item (no parent), render it normally
                if (!item.parent) {
                  return <div key={index}>{renderNavLink(item)}</div>;
                }

                // If this item has a parent but we've already processed the parent, skip it
                return null;
              })}
            </div>

            {/* Bottom Navigation */}
            <div className="space-y-1">
              {finalMenuItems?.bottom?.map((item, index) => (
                <div key={index}>{renderNavLink(item)}</div>
              ))}
            </div>
          </nav>

          {/* User Section - Commented */}
          {/* <div className=" fixed left-0 border-t border-white/10 bottom-0 w-full md:static bg-gradient-to-t from-primary to-primary/95 backdrop-blur-sm">
            <button
              onClick={handleLogout}
              className="flex items-center justify-start w-full h-[81px] p-4 gap-[10px] text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <LogoutIcon className="w-5 h-5" />
              </div>
              <span className="text-base font-medium leading-[1.5625rem]  ">
                Logout
              </span>
            </button>
          </div> */}

          {/* Plan Pro Section */}
          <div data-layer="Container" className="Container self-stretch p-3 flex flex-col justify-start items-start">
            <div data-layer="Background" className="Background self-stretch h-16 relative bg-white/10 rounded-xl">
              <div data-layer="Container" className="Container w-52 left-[12px] top-[12px] absolute inline-flex flex-col justify-start items-start">
                <div data-layer="Plan: Pro" className="PlanPro justify-center text-white/70 text-xs font-normal font-['Inter_Tight'] leading-4">Plan: Pro</div>
              </div>
              <div data-layer="Background" className="Background w-52 h-1.5 left-[12px] top-[34px] absolute bg-teal-900 rounded-full">
                <div data-layer="Background" className="Background w-20 h-1.5 left-0 top-0 absolute bg-teal-600 rounded-full" />
              </div>
              <div data-layer="Container" className="Container w-52 left-[12px] top-[44px] absolute inline-flex flex-col justify-start items-start">
                <div data-layer="4,000 / 10,000 messages" className="00010000Messages justify-center text-white/70 text-[10px] font-normal font-['Inter_Tight'] leading-4">4,000 / 10,000 messages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Sidebar - always visible on larger screens */}
      <aside className="hidden md:block mt-0">
        {renderSidebarContent()}
      </aside>

      {/* Mobile Sidebar - only visible when toggled */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        {renderSidebarContent()}
      </aside>

      {/* Overlay when mobile sidebar is open */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
