import React, { useRef, useState } from "react";

const users = [
  { id: "USR-4821", name: "Sarah Chen", active: true },
  { id: "USR-4820", name: "Mike Johnson", active: false },
  { id: "USR-4819", name: "Emily Brown", active: false },
  { id: "USR-4818", name: "David Kim", active: true },
];

const userMessages = {
  "Sarah Chen": [
    {
      id: 1,
      sender: "user",
      text: "Hi, I'm having trouble with my subscription renewal.",
      time: "2:34 PM",
    },
    {
      id: 2,
      sender: "agent",
      text: "I'd be happy to help you with your subscription! Could you provide me with your account email?",
      time: "2:34 PM",
    },
    {
      id: 3,
      sender: "user",
      text: "Sure, it's sarah@company.com",
      time: "2:35 PM",
    },
    {
      id: 4,
      sender: "agent",
      text: "I found your account. It looks like your payment method expired. Would you like to update it?",
      time: "2:35 PM",
    },
  ],
};

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState("Sarah Chen");
  const [searchTerm, setSearchTerm] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [aiAssist, setAiAssist] = useState(true);
  const [messages, setMessages] = useState(userMessages["Sarah Chen"]);
  const fileRef = useRef(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (name) => {
    setSelectedUser(name);
    setMessages(userMessages[name] || []);
  };

  const handleSend = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "agent",
      text: messageInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageInput("");
  };

  const handleUploadClick = () => {
    fileRef.current?.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const uploadedMessage = {
        id: Date.now() + 1,
        sender: "agent",
        text: `Uploaded: ${file.name}`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      setMessages((prev) => [...prev, uploadedMessage]);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f7f7]  font-poppins">
      <div className="w-full max-w-[1440px] mx-auto bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">
        <div className="flex flex-col xl:flex-row min-h-[720px]">

          {/* LEFT SIDEBAR */}
          <div className="w-full xl:w-[250px] border-r border-[#E5E7EB] bg-white">
            <div className="p-3 border-b border-[#E5E7EB]">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search chats..."
                className="w-full h-10 rounded-xl bg-[#F5F6F7] px-4 text-sm outline-none border border-transparent focus:border-[#d1d5db] font-poppins"
              />
            </div>

            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => handleUserClick(user.name)}
                className="px-4 py-4 border-b border-[#F1F1F1] cursor-pointer hover:bg-[#fafafa]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[14px] text-[#111827] font-poppins">{user.name}</p>
                  {user.active && (
                    <div className="w-2 h-2 rounded-full bg-[#3FA284]" />
                  )}
                </div>
                <p className="text-[12px] text-[#9CA3AF] mt-1 font-poppins">{user.id}</p>
              </div>
            ))}
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 border-r border-[#E5E7EB] flex flex-col">
            <div className="h-[72px] px-5 border-b border-[#E5E7EB] flex items-center justify-between">
              <div>
                <p className="text-sm text-[#111827] font-poppins">{selectedUser}</p>
                <p className="text-xs text-[#9CA3AF] font-poppins">USR-4821</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-[#6B7280] font-poppins">AI Assist</span>
                <button
                  onClick={() => setAiAssist(!aiAssist)}
                  className={`w-11 h-6 rounded-full transition-all ${
                    aiAssist ? "bg-[#0B4B43]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transition-all ${
                      aiAssist ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto bg-white space-y-6">
              {/* Messages with visible user + chatbot SVG exactly like design */}
              {messages.map((msg) => (
                <div key={msg.id}>
                  {msg.sender === "user" ? (
                    <div className="flex justify-start">
                      <div className="flex items-start gap-2">
                        <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 mt-1">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0837 12.25V11.0833C11.0837 10.4645 10.8378 9.871 10.4002 9.43342C9.96266 8.99583 9.36916 8.75 8.75033 8.75H5.25033C4.63149 8.75 4.03799 8.99583 3.60041 9.43342C3.16282 9.871 2.91699 10.4645 2.91699 11.0833V12.25" stroke="#6B7280" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.00033 6.41667C8.28899 6.41667 9.33366 5.372 9.33366 4.08333C9.33366 2.79467 8.28899 1.75 7.00033 1.75C5.71166 1.75 4.66699 2.79467 4.66699 4.08333C4.66699 5.372 5.71166 6.41667 7.00033 6.41667Z" stroke="#6B7280" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>

                        <div className="max-w-[340px] rounded-2xl px-4 py-3 bg-[#F3F4F6] text-[#111827] text-sm shadow-sm">
                          <p className="text-sm font-poppins">{msg.text}</p>
                          <p className="text-[10px] text-[#6B7280] mt-2 font-poppins">{msg.time}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <div className="flex items-start gap-2">
                        <div className="max-w-[340px] rounded-2xl px-4 py-3 bg-[#0B4B43] text-white text-sm shadow-sm">
                          <p className="text-sm font-poppins">{msg.text}</p>
                          <p className="text-[10px] text-white/70 mt-2 font-poppins">{msg.time}</p>
                        </div>

                        <div className="w-7 h-7 min-w-[28px] rounded-full bg-[#0B4B43]/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00033 4.66659V2.33325H4.66699" stroke="#3FA284" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.4997 4.66675H3.49967C2.85534 4.66675 2.33301 5.18908 2.33301 5.83341V10.5001C2.33301 11.1444 2.85534 11.6667 3.49967 11.6667H10.4997C11.144 11.6667 11.6663 11.1444 11.6663 10.5001V5.83341C11.6663 5.18908 11.144 4.66675 10.4997 4.66675Z" stroke="#3FA284" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5E7EB] px-4 py-3 flex items-center gap-3">
              <input ref={fileRef} type="file" className="hidden" onChange={handleFileUpload} />

              <button onClick={handleUploadClick} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#F5F5F5]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.2929 7.36645L8.16621 13.4931C7.41565 14.2437 6.39767 14.6653 5.33621 14.6653C4.27475 14.6653 3.25677 14.2437 2.50621 13.4931C1.75565 12.7425 1.33398 11.7246 1.33398 10.6631C1.33398 9.60166 1.75565 8.58367 2.50621 7.83311L8.21954 2.11978C8.71992 1.61852 9.39892 1.33656 10.1072 1.33594C10.8154 1.33531 11.495 1.61607 11.9962 2.11645C12.4975 2.61682 12.7794 3.29583 12.78 4.00409C12.7807 4.71235 12.4999 5.39185 11.9995 5.89311L6.27288 11.6064C6.02269 11.8566 5.68336 11.9972 5.32954 11.9972C4.97572 11.9972 4.6364 11.8566 4.38621 11.6064C4.13602 11.3563 3.99547 11.0169 3.99547 10.6631C3.99547 10.3093 4.13602 9.96997 4.38621 9.71978L10.0462 4.06645" stroke="#0F1729" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </button>

              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 h-11 rounded-xl bg-[#F7F7F7] border border-[#E5E7EB] px-4 outline-none text-sm font-poppins"
              />

              <button onClick={handleSend} className="w-10 h-10 rounded-lg bg-[#0B4B43] text-white flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.69021 14.4572C9.71554 14.5203 9.75957 14.5742 9.81639 14.6116C9.87322 14.6489 9.94011 14.668 10.0081 14.6663C10.0761 14.6646 10.1419 14.6421 10.1968 14.6018C10.2516 14.5616 10.2928 14.5055 10.3149 14.4412L14.6482 1.77454C14.6695 1.71547 14.6736 1.65154 14.66 1.59024C14.6463 1.52894 14.6154 1.4728 14.571 1.42839C14.5266 1.38398 14.4705 1.35314 14.4092 1.33947C14.3479 1.3258 14.2839 1.32987 14.2249 1.35121L1.55821 5.68454C1.49388 5.7066 1.43783 5.74782 1.39759 5.80266C1.35736 5.85749 1.33486 5.92332 1.33312 5.99131C1.33138 6.05931 1.35047 6.1262 1.38785 6.18303C1.42523 6.23985 1.47909 6.28388 1.54221 6.30921L6.82888 8.42921C6.996 8.49612 7.14785 8.59618 7.27526 8.72336C7.40266 8.85054 7.503 9.0022 7.57021 9.16921L9.69021 14.4572Z" stroke="#F2F8F6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.5697 1.43115L7.27637 8.72382" stroke="#F2F8F6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </button>
            </div>
          </div>

{/* rifght side */}           <div className="w-full xl:w-[280px] p-5 bg-white">
            <h3 className="text-sm font-medium text-[#111827] mb-5 font-poppins">
              Customer Profile
            </h3>

            <div className="space-y-4 text-sm">
              <Info label="Name" value={selectedUser} />
              <Info label="Location" value="San Francisco, CA" />
              <Info label="Browser" value="Chrome 120" />
              <Info label="Previous Conversations" value="3" />
            </div>

            <div className="border-t border-[#E5E7EB] mt-6 pt-4">
              <p className="text-xs text-[#9CA3AF] mb-2 font-poppins">AI Summary</p>
              <p className="text-xs text-[#6B7280] leading-6 font-poppins">
                Customer is experiencing a subscription renewal issue due to an
                expired payment method. Needs guidance to update billing info.
              </p>
            </div>

            <button className="w-full h-11 mt-8 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-sm font-poppins">
              Close Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-[#111827] font-poppins">{label}</p>
      <p className="text-xs text-[#9CA3AF] mt-1 font-poppins">{value}</p>
    </div>
  );
}







