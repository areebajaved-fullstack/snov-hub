import React, { useState, useRef, useEffect } from "react";

const TestBotModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! 👋 I'm your AI support assistant. How can I help you today?",
    },
    { sender: "user", text: "helo" },
    {
      sender: "bot",
      text:
        "Thanks for reaching out! I'm here to help. Could you tell me more about what you need?",
    },
  ]);

  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Got it 👍 Let me help you." },
      ]);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 font-poppins">
      
      {/* Modal */}
      <div className="w-full max-w-[498px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden font-poppins">

        {/* HEADER */}
        <div className="px-4 pt-4 pb-3 border-b border-zinc-200 flex flex-col gap-3 relative">
          
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 font-poppins"
          >
            ✕
          </button>

          <div>
            <h2 className="text-gray-900 text-base font-medium leading-6 font-poppins">
              Test Bot
            </h2>
            <p className="text-slate-500 text-xs leading-4 font-poppins">
              Preview how your agent responds to messages
            </p>
          </div>

          {/* Dropdown */}
          <div className="pt-1.5">
            <div className="h-8 px-3 bg-stone-50 rounded-[10px] border border-zinc-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-900 font-poppins">
                  Support Assistant
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-teal-600 text-white rounded-full font-poppins">
                  live
                </span>
              </div>

              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.666992 0.666664L4.66699 4.66666L8.66699 0.666664"
                  stroke="#121821"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* CHAT BODY */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto min-h-[320px] max-h-[420px]">

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2.5 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              
              {/* BOT ICON */}
              {msg.sender === "bot" && (
                <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00033 4.66666V2.33333H4.66699" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.4997 4.66667H3.49967C2.85534 4.66667 2.33301 5.18901 2.33301 5.83334V10.5C2.33301 11.1443 2.85534 11.6667 3.49967 11.6667H10.4997C11.144 11.6667 11.6663 11.1443 11.6663 10.5V5.83334C11.6663 5.18901 11.144 4.66667 10.4997 4.66667Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.16699 8.16667H2.33366" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.667 8.16667H12.8337" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.75 7.58333V8.74999" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.25 7.58333V8.74999" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              {/* MESSAGE */}
              <div
                className={`max-w-[260px] px-3 py-2 text-xs leading-6 rounded-xl font-poppins ${
                  msg.sender === "user"
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {msg.text}
              </div>

              {/* USER ICON */}
              {msg.sender === "user" && (
                <div className="w-7 h-7 bg-neutral-100 rounded-xl border border-zinc-200 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0837 12.25V11.0833C11.0837 10.4645 10.8378 9.871 10.4002 9.43342C9.96266 8.99583 9.36916 8.75 8.75033 8.75H5.25033C4.63149 8.75 4.03799 8.99583 3.60041 9.43342C3.16282 9.871 2.91699 10.4645 2.91699 11.0833V12.25" stroke="#6F7D90" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.00033 6.41667C8.28899 6.41667 9.33366 5.372 9.33366 4.08333C9.33366 2.79467 8.28899 1.75 7.00033 1.75C5.71166 1.75 4.66699 2.79467 4.66699 4.08333C4.66699 5.372 5.71166 6.41667 7.00033 6.41667Z" stroke="#6F7D90" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}

          <div ref={endRef} />
        </div>

        {/* FOOTER */}
        <div className="p-3 border-t border-zinc-200 flex flex-col gap-3">
          
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 h-9 px-3 bg-stone-50 rounded-[10px] border border-zinc-200 text-xs outline-none font-poppins"
            />

            <button
              onClick={handleSend}
              className="w-9 h-9 bg-emerald-950 rounded-[10px] flex items-center justify-center hover:opacity-80 transition"
            >
              <svg width="16" height="16" fill="none">
                <path
                  d="M9.69021 14.4573L14.6482 1.77466L1.55821 5.68466L6.82888 8.42933L9.69021 14.4573Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <p className="text-[10px] text-center text-slate-500 font-poppins">
            Testing as: <span className="font-medium">Support Assistant</span> • Simulated responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestBotModal;