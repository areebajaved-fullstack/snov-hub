import React from "react";

const Channels = () => {
  const channelsData = [
    {
      id: 1,
      name: "Website Chat",
      status: "connected",
      messages: "2,340 messages this month",
      tags: ["Customer Support Bot", "Sales Assistant"],
      action: "disconnect",
    },
    {
      id: 2,
      name: "WhatsApp",
      status: "connected",
      messages: "890 messages this month",
      tags: ["Customer Support Bot"],
      action: "disconnect",
    },
    {
      id: 3,
      name: "Email",
      status: "connected",
      messages: "456 messages this month",
      tags: ["Technical Helper"],
      action: "disconnect",
    },
    {
      id: 4,
      name: "Slack",
      status: "disconnected",
      messages: "156 messages this month",
      tags: [],
      action: "connect",
    },
  ];

  const ChannelCard = ({ channel }) => {
    const isConnected = channel.status === "connected";

    return (
      <div className="w-[556px] h-36 relative bg-white rounded-lg shadow border p-4">
        
        {/* Top Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-xl" />

          <div>
            <h3 className="text-slate-900 text-base">
              {channel.name}
            </h3>

            <span
              className={`text-[10px] px-2 py-1 rounded-full ${
                isConnected
                  ? "bg-teal-600 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {channel.status}
            </span>
          </div>
        </div>

        {/* Messages */}
        <p className="text-gray-500 text-sm mt-4">
          {channel.messages}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {channel.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] border px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          className={`absolute right-4 bottom-4 px-3 py-1 text-xs rounded ${
            channel.action === "disconnect"
              ? "bg-red-500 text-white"
              : "bg-emerald-900 text-white"
          }`}
        >
          {channel.action}
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-medium text-slate-900">
          Channels
        </h1>
        <p className="text-gray-500 text-sm">
          Connect and manage your communication channels.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4">
        {channelsData.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>

    </div>
  );
};

export default Channels;