import React, { useState } from "react";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState('Sarah Chen');
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [aiAssist, setAiAssist] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: "Hi, I'm having trouble with my subscription renewal.",
      time: '2:34 PM'
    },
    {
      id: 2,
      sender: 'agent',
      text: "I'd be happy to help you with your subscription! Could you provide me with your account email?",
      time: '2:34 PM'
    },
    {
      id: 3,
      sender: 'user',
      text: "Sure, it's sarah@company.com",
      time: '2:35 PM'
    },
    {
      id: 4,
      sender: 'agent',
      text: "I found your account. It looks like your payment method expired. Would you like to update it?",
      time: '2:35 PM'
    }
  ]);

  const userMessages = {
    'Sarah Chen': [
      {
        id: 1,
        sender: 'user',
        text: "Hi, I'm having trouble with my subscription renewal.",
        time: '2:34 PM'
      },
      {
        id: 2,
        sender: 'agent',
        text: "I'd be happy to help you with your subscription! Could you provide me with your account email?",
        time: '2:34 PM'
      },
      {
        id: 3,
        sender: 'user',
        text: "Sure, it's sarah@company.com",
        time: '2:35 PM'
      },
      {
        id: 4,
        sender: 'agent',
        text: "I found your account. It looks like your payment method expired. Would you like to update it?",
        time: '2:35 PM'
      }
    ],
    'Mike Johnson': [
      {
        id: 1,
        sender: 'user',
        text: "Hello, I need help with my account settings.",
        time: '3:15 PM'
      },
      {
        id: 2,
        sender: 'agent',
        text: "Hi Mike! I'd be happy to help you with your account settings. What specifically do you need assistance with?",
        time: '3:15 PM'
      },
      {
        id: 3,
        sender: 'user',
        text: "I want to change my password and update my profile information.",
        time: '3:16 PM'
      }
    ],
    'Emily Brown': [
      {
        id: 1,
        sender: 'user',
        text: "Hi there! I have a question about billing.",
        time: '1:20 PM'
      },
      {
        id: 2,
        sender: 'agent',
        text: "Hello Emily! I'm here to help with your billing questions. What would you like to know?",
        time: '1:21 PM'
      },
      {
        id: 3,
        sender: 'user',
        text: "I was charged twice for my monthly subscription.",
        time: '1:22 PM'
      }
    ],
    'David Kim': [
      {
        id: 1,
        sender: 'user',
        text: "Hey, I can't access my dashboard.",
        time: '4:45 PM'
      },
      {
        id: 2,
        sender: 'agent',
        text: "Hi David! I'm sorry to hear you're having trouble accessing your dashboard. Let me help you with that.",
        time: '4:46 PM'
      },
      {
        id: 3,
        sender: 'user',
        text: "It keeps showing an error message when I try to log in.",
        time: '4:47 PM'
      }
    ]
  };

  const users = [
    { id: 'USR-4821', name: 'Sarah Chen', active: true },
    { id: 'USR-4820', name: 'Mike Johnson', active: false },
    { id: 'USR-4819', name: 'Emily Brown', active: false },
    { id: 'USR-4818', name: 'David Kim', active: true }
  ];

  const handleUserClick = (userName) => {
    setSelectedUser(userName);
    setMessages(userMessages[userName] || []);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'agent',
        text: messageInput,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div data-layer="Background+Border+Shadow" className=" w-full BackgroundBorderShadow self-stretch h-[600px] bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-row justify-start items-start overflow-hidden">
      {/* Left Sidebar */}
      <div data-layer="VerticalBorder" className="Verticalborder w-72 h-full flex-shrink-0 relative border-r border-gray-200">
        <div data-layer="HorizontalBorder" className="Horizontalborder w-full p-3 border-b border-gray-200">
          <div data-layer="Input" className="Input self-stretch h-8 relative bg-gray-100 rounded-[10px] overflow-hidden">
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-full bg-transparent outline-none text-sm font-normal font-['Inter_Tight'] text-gray-500 pl-3 pr-3"
            />
          </div>
        </div>
        <div data-layer="Container" className="Container w-full flex-1 pt-3 overflow-hidden">
          <div data-layer="Container" className="Container size- min-w-72 flex flex-col justify-start items-start">
            {filteredUsers.map((user) => (
              <div 
                key={user.id}
                data-layer="HorizontalBorder" 
                className="Horizontalborder self-stretch px-3 pt-3 pb-3.5 border-b border-gray-200 flex flex-col justify-start items-start gap-[5px] cursor-pointer hover:bg-gray-50"
                onClick={() => handleUserClick(user.name)}
              >
                <div data-layer="Container" className="Container self-stretch inline-flex justify-between items-center">
                  <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                    <div data-layer={user.name} className={`${user.name.replace(/\s+/g, '')} justify-center text-slate-900 text-sm font-normal font-['Inter_Tight'] leading-5`}>{user.name}</div>
                  </div>
                  {user.active && (
                    <div data-svg-wrapper data-layer="Background" className="Background">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="4" fill="#3FA284"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div data-layer={user.id} className={`${user.id.replace('-', '')} justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4`}>{user.id}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Chat Area */}
      <div data-layer="VerticalBorder" className="Verticalborder flex-1 h-full flex flex-col relative border-r border-gray-200">
        <div data-layer="HorizontalBorder" className="Horizontalborder w-full p-3 border-b border-gray-200 inline-flex justify-between items-center">
          <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Sarah Chen" className="SarahChen justify-center text-slate-900 text-sm font-normal font-['Inter_Tight'] leading-5">{selectedUser}</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="USR-4821" className="Usr4821 justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">{users.find(u => u.name === selectedUser)?.id || 'USR-4821'}</div>
            </div>
          </div>
          <div data-layer="Container" className="Container size- flex justify-start items-center gap-2">
            <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
              <div data-layer="AI Assist" className="AiAssist justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">AI Assist</div>
            </div>
            <button 
              data-layer="Switch" 
              className={`Switch w-11 h-5 rounded-full outline outline-2 outline-offset-[-2px] outline-black/0 flex justify-start items-center transition-colors duration-200 ${
                aiAssist ? 'bg-[#0A3D37]' : 'bg-gray-300'
              }`}
              onClick={() => setAiAssist(!aiAssist)}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-all duration-200 ${
                aiAssist ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </button>
          </div>
        </div>
        <div data-layer="Container" className="Container flex-1 p-4 overflow-hidden overflow-y-auto">
          <div data-layer="Container" className="Container self-stretch flex-1 flex flex-col justify-start items-start overflow-hidden">
            <div data-layer="Container" className="Container size- min-w-[534px] flex flex-col justify-start items-start gap-4">
              {messages.map((message) => (
                <div key={message.id} data-layer="Container" className={`Container self-stretch inline-flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'} items-start gap-2`}>
                  {message.sender === 'user' && (
                    <div data-layer="Background" className="Background size-7 bg-gray-100 rounded-full flex justify-center items-center">
                      <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.0837 12.25V11.0833C11.0837 10.4645 10.8378 9.871 10.4002 9.43342C9.96266 8.99583 9.36916 8.75 8.75033 8.75H5.25033C4.63149 8.75 4.03799 8.99583 3.60041 9.43342C3.16282 9.871 2.91699 10.4645 2.91699 11.0833V12.25" stroke="#6B7280" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M7.00033 6.41667C8.28899 6.41667 9.33366 5.372 9.33366 4.08333C9.33366 2.79467 8.28899 1.75 7.00033 1.75C5.71166 1.75 4.66699 2.79467 4.66699 4.08333C4.66699 5.372 5.71166 6.41667 7.00033 6.41667Z" stroke="#6B7280" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                  <div data-layer="Paragraph+Background" className={`ParagraphBackground self-stretch max-w-96 px-3 py-2 rounded-2xl inline-flex flex-col justify-start items-start gap-1 ${
                    message.sender === 'user' ? 'bg-gray-100' : 'bg-[rgb(10,61,55)]'
                  }`}>
                    <div data-layer={message.text.substring(0, 20)} className={`${message.text.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '')} justify-center ${
                      message.sender === 'user' ? 'text-black' : 'text-gray-100'
                    } text-xs font-normal font-['Inter_Tight'] leading-5`}>{message.text}</div>
                    <div data-layer={message.time} className={`${message.time.replace(':', '')} justify-center ${
                      message.sender === 'user' ? 'text-gray-500' : 'text-gray-100/60'
                    } text-[10px] font-normal font-['Inter_Tight'] leading-5`}>{message.time}</div>
                  </div>
                  {message.sender === 'agent' && (
                    <div data-layer="Overlay" className="Overlay size-7 bg-teal-600/20 rounded-full flex justify-center items-center">
                      <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00033 4.66659V2.33325H4.66699" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M10.4997 4.66675H3.49967C2.85534 4.66675 2.33301 5.18908 2.33301 5.83341V10.5001C2.33301 11.1444 2.85534 11.6667 3.49967 11.6667H10.4997C11.144 11.6667 11.6663 11.1444 11.6663 10.5001V5.83341C11.6663 5.18908 11.144 4.66675 10.4997 4.66675Z" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M1.16699 8.16675H2.33366" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M11.667 8.16675H12.8337" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8.75 7.58325V8.74992" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5.25 7.58325V8.74992" stroke="#3FA284" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div data-layer="HorizontalBorder" className="Horizontalborder w-full py-2 px-3 border-t border-gray-200 inline-flex justify-start items-start gap-2">
          <div data-layer="Button" className="Button size-10 rounded-[10px] flex justify-center items-center">
            <div data-svg-wrapper data-layer="SVG" className="Svg relative">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2929 7.36645L8.16621 13.4931C7.41565 14.2437 6.39767 14.6653 5.33621 14.6653C4.27475 14.6653 3.25677 14.2437 2.50621 13.4931C1.75565 12.7425 1.33398 11.7246 1.33398 10.6631C1.33398 9.60166 1.75565 8.58367 2.50621 7.83311L8.21954 2.11978C8.71992 1.61852 9.39892 1.33656 10.1072 1.33594C10.8154 1.33531 11.495 1.61607 11.9962 2.11645C12.4975 2.61682 12.7794 3.29583 12.78 4.00409C12.7807 4.71235 12.4999 5.39185 11.9995 5.89311L6.27288 11.6064C6.02269 11.8566 5.68336 11.9972 5.32954 11.9972C4.97572 11.9972 4.6364 11.8566 4.38621 11.6064C4.13602 11.3563 3.99547 11.0169 3.99547 10.6631C3.99547 10.3093 4.13602 9.96997 4.38621 9.71978L10.0462 4.06645" stroke="#0F1729" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div data-layer="Input" className="Input flex-1 h-9 relative bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 overflow-hidden">
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full h-full bg-transparent outline-none text-sm font-normal font-['Inter_Tight'] text-gray-500 pl-3 pr-3"
            />
          </div>
          <button 
            data-layer="Button" 
            className="Button size-10 bg-cyan-950 rounded-[10px] flex justify-center items-center hover:bg-cyan-900 transition-colors duration-200"
            onClick={handleSendMessage}
          >
            <div data-svg-wrapper data-layer="SVG" className="Svg relative">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.69021 14.4572C9.71554 14.5203 9.75957 14.5742 9.81639 14.6116C9.87322 14.6489 9.94011 14.668 10.0081 14.6663C10.0761 14.6646 10.1419 14.6421 10.1968 14.6018C10.2516 14.5616 10.2928 14.5055 10.3149 14.4412L14.6482 1.77454C14.6695 1.71547 14.6736 1.65154 14.66 1.59024C14.6463 1.52894 14.6154 1.4728 14.571 1.42839C14.5266 1.38398 14.4705 1.35314 14.4092 1.33947C14.3479 1.3258 14.2839 1.32987 14.2249 1.35121L1.55821 5.68454C1.49388 5.7066 1.43783 5.74782 1.39759 5.80266C1.35736 5.85749 1.33486 5.92332 1.33312 5.99131C1.33138 6.05931 1.35047 6.1262 1.38785 6.18303C1.42523 6.23985 1.47909 6.28388 1.54221 6.30921L6.82888 8.42921C6.996 8.49612 7.14785 8.59618 7.27526 8.72336C7.40266 8.85054 7.503 9.0022 7.57021 9.16921L9.69021 14.4572Z" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5697 1.43115L7.27637 8.72382" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div data-layer="Container" className="Container w-80 h-full flex-shrink-0 p-4 inline-flex flex-col justify-start items-start gap-4">
        <div data-layer="Heading 3" className="Heading3 self-stretch flex flex-col justify-start items-start">
          <div data-layer="Customer Profile" className="CustomerProfile justify-center text-slate-900 text-sm font-medium font-['Inter_Tight'] leading-5">Customer Profile</div>
        </div>
        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-3">
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Name" className="Name justify-center text-slate-900 text-xs font-normal font-['Inter_Tight'] leading-5">Name</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Sarah Chen" className="SarahChen justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">{selectedUser}</div>
            </div>
          </div>
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Location" className="Location justify-center text-slate-900 text-xs font-normal font-['Inter_Tight'] leading-5">Location</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="San Francisco, CA" className="SanFranciscoCa justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">San Francisco, CA</div>
            </div>
          </div>
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Browser" className="Browser justify-center text-slate-900 text-xs font-normal font-['Inter_Tight'] leading-5">Browser</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Chrome 120" className="Chrome120 justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">Chrome 120</div>
            </div>
          </div>
          <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Previous Conversations" className="PreviousConversations justify-center text-slate-900 text-xs font-normal font-['Inter_Tight'] leading-5">Previous Conversations</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="3" className="justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">3</div>
            </div>
          </div>
          <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-2 border-t border-gray-200 flex flex-col justify-start items-start gap-[3.25px]">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="AI Summary" className="AiSummary justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">AI Summary</div>
            </div>
            <div data-layer="Container" className="Container self-stretch pb-[0.75px] flex flex-col justify-start items-start">
              <div data-layer="Customer is experiencing a subscription renewal issue due to an expired payment method. Needs guidance to update billing info." className="CustomerIsExperiencingASubscriptionRenewalIssueDueToAnExpiredPaymentMethodNeedsGuidanceToUpdateBillingInfo justify-center text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-5">Customer is experiencing a subscription<br/>renewal issue due to an expired payment<br/>method. Needs guidance to update billing<br/>info.</div>
            </div>
          </div>
        </div>
        <button data-layer="Button" className="Button self-stretch h-10 px-4 py-2 bg-gray-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-center items-center hover:bg-gray-100 transition-colors duration-200">
          <div data-layer="Close Ticket" className="CloseTicket text-center justify-center text-slate-900 text-sm font-normal font-['Inter_Tight'] leading-5">Close Ticket</div>
        </button>
      </div>
    </div>
  );
};

export default Chat;
