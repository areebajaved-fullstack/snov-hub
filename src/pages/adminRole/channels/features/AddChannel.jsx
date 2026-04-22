import { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";

const channels = [
  "WhatsApp Business",
  "Email",
  "Slack",
  "Facebook Messenger",
  "API",
];

const agents = ["Sales Assistant", "Technical Helper"];

export default function AddChannelModal({ onClose }) {
  const [selectedChannel, setSelectedChannel] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [openChannel, setOpenChannel] = useState(false);
  const [openAgent, setOpenAgent] = useState(false);

  return (
    <div className="w-[448px] max-w-sm bg-white rounded-xl shadow-lg p-6 relative font-['Inter Tight']">
      
      {/* Close Button */}
      <button className="absolute top-4 right-4 opacity-70" onClick={onClose}>
        <X size={16} />
      </button>

      {/* Header */}
      <h2 className="text-lg font-medium text-zinc-900">Add Channel</h2>
      <p className="text-xs text-neutral-500 mt-1">
        Connect a new communication channel to your platform.
      </p>

      {/* Form */}
      <div className="mt-5 space-y-4">
        
        {/* Channel Type */}
        <div className="relative">
          <label className="text-sm text-zinc-900">Channel Type</label>
          <div
            onClick={() => setOpenChannel(!openChannel)}
            className="mt-1 h-10 px-3 flex items-center justify-between bg-gray-50 border rounded-lg cursor-pointer"
          >
            <span className="text-sm">
              {selectedChannel || "Select channel"}
            </span>
            <ChevronDown size={16} />
          </div>

          {openChannel && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow p-2 z-50 w-full">
              <p className="text-xs text-gray-500 px-2 pb-1">
                Website Chat Widget
              </p>
              {channels.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedChannel(item);
                    setOpenChannel(false);
                  }}
                  className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                    selectedChannel === item
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Channel Name */}
        <div>
          <label className="text-sm text-zinc-900">Channel Name</label>
          <input
            type="text"
            placeholder="e.g., Main Website Chat"
            className="mt-1 w-full h-10 px-3 bg-gray-50 border rounded-lg text-sm outline-none"
          />
        </div>

        {/* Assign Agent */}
        <div className="relative">
          <label className="text-sm text-zinc-900">Assign Agent</label>
          <div
            onClick={() => setOpenAgent(!openAgent)}
            className="mt-1 h-10 px-3 flex items-center justify-between bg-gray-50 border rounded-lg cursor-pointer"
          >
            <span className="text-sm">
              {selectedAgent || "Select agent"}
            </span>
            <ChevronDown size={16} />
          </div>

          {openAgent && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow p-2 z-50 w-full">
              <p className="text-xs text-gray-500 px-2 pb-1">
                Customer Support Bot
              </p>
              {agents.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedAgent(item);
                    setOpenAgent(false);
                  }}
                  className={`px-3 py-2 text-sm rounded-md cursor-pointer ${
                    selectedAgent === item
                      ? "bg-emerald-100 text-emerald-900 border border-emerald-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2 mt-6">
        <button className="px-4 h-10 text-sm border rounded-lg bg-gray-50">
          Cancel
        </button>
        <button className="px-4 h-10 text-sm bg-emerald-950 text-white rounded-lg flex items-center gap-1">
          <Check size={16} />
          Add Channel
        </button>
      </div>
    </div>
  );
}