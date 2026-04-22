import React, { useState } from "react";

const Toggle = ({ enabled, setEnabled }) => {
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-10 h-6 flex items-center rounded-full p-1 transition duration-200 ${
        enabled ? "bg-[#3FA284]" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-200 ${
          enabled ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
};

const NotificationItem = ({ title, desc, state, setState }) => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 rounded-lg">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-800">{title}</span>
        <span className="text-xs text-gray-500">{desc}</span>
      </div>

      <Toggle enabled={state} setEnabled={setState} />
    </div>
  );
};

const NotificationsSection = () => {
  const [newConversations, setNewConversations] = useState(true);
  const [escalationAlerts, setEscalationAlerts] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <div className="w-full max-w-[1135px] bg-white rounded-2xl border border-gray-200 p-6">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-xl border">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12V12.5C10 13.03 9.79 13.54 9.41 13.91C9.04 14.29 8.53 14.5 8 14.5C7.47 14.5 6.96 14.29 6.59 13.91C6.21 13.54 6 13.03 6 12.5V12M13.36 10.98C12.56 10 12 9.5 12 6.79C12 4.31 10.73 3.43 9.68 3C9.55 2.94 9.42 2.81 9.37 2.67C9.19 2.05 8.68 1.5 8 1.5C7.32 1.5 6.81 2.05 6.63 2.67C6.58 2.81 6.45 2.94 6.31 3C5.27 3.43 4 4.31 4 6.79C4 9.5 3.44 10 2.64 10.98C2.3 11.38 2.59 12 3.17 12H12.83C13.41 12 13.7 11.38 13.36 10.98Z"
              stroke="#3FA284"
              strokeWidth="1.3"
            />
          </svg>
        </div>

        <h2 className="text-base font-medium text-gray-900">
          Notifications
        </h2>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3">
        <NotificationItem
          title="New conversations"
          desc="Get notified when a new conversation starts"
          state={newConversations}
          setState={setNewConversations}
        />

        <NotificationItem
          title="Escalation alerts"
          desc="Receive alerts when AI escalates to human"
          state={escalationAlerts}
          setState={setEscalationAlerts}
        />

        <NotificationItem
          title="Weekly digest"
          desc="Receive a weekly performance summary"
          state={weeklyDigest}
          setState={setWeeklyDigest}
        />
      </div>
    </div>
  );
};

export default NotificationsSection;