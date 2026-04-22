import React, { useState } from "react";

const InviteMemberModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");

  if (!isOpen) return null;

  const roles = [
    {
      name: "Admin",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M16.6663 10.8335C16.6663 15.0002 13.7497 17.0835 10.283 18.2919C10.1015 18.3534 9.90429 18.3505 9.72467 18.2835C6.24967 17.0835 3.33301 15.0002 3.33301 10.8335V5.00021C3.33301 4.7792 3.42081 4.56724 3.57709 4.41096C3.73337 4.25468 3.94533 4.16688 4.16634 4.16688C5.83301 4.16688 7.91634 3.16688 9.36634 1.90021C9.54289 1.74938 9.76747 1.6665 9.99967 1.6665C10.2319 1.6665 10.4565 1.74938 10.633 1.90021C12.0913 3.17521 14.1663 4.16688 15.833 4.16688C16.054 4.16688 16.266 4.25468 16.4223 4.41096C16.5785 4.56724 16.6663 4.7792 16.6663 5.00021V10.8335Z"
            stroke="#3FA284"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Editor",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.6453 5.67682C18.0859 5.23634 18.3334 4.63888 18.3335 4.01587C18.3336 3.39285 18.0862 2.79533 17.6457 2.35474C17.2052 1.91415 16.6077 1.66658 15.9847 1.6665C15.3617 1.66643 14.7642 1.91384 14.3236 2.35432L3.20194 13.4785C3.00845 13.6714 2.86537 13.9089 2.78527 14.1702L1.68444 17.7968C1.6629 17.8689 1.66127 17.9454 1.67973 18.0184C1.69819 18.0913 1.73604 18.1578 1.78927 18.211C1.8425 18.2641 1.90912 18.3019 1.98207 18.3202C2.05502 18.3386 2.13157 18.3368 2.2036 18.3152L5.8311 17.2152C6.09208 17.1358 6.32958 16.9936 6.52277 16.801L17.6453 5.67682Z"
            stroke="#6A7981"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Viewer",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M1.7181 10.2898C1.64865 10.1027 1.64865 9.89691 1.7181 9.70981C2.39452 8.06969 3.5427 6.66735 5.01708 5.68056C6.49146 4.69378 8.22564 4.16699 9.99977 4.16699C11.7739 4.16699 13.5081 4.69378 14.9825 5.68056C16.4568 6.66735 17.605 8.06969 18.2814 9.70981C18.3509 9.89691 18.3509 10.1027 18.2814 10.2898C17.605 11.9299 16.4568 13.3323 14.9825 14.3191C13.5081 15.3058 11.7739 15.8326 9.99977 15.8326C8.22564 15.8326 6.49146 15.3058 5.01708 14.3191C3.5427 13.3323 2.39452 11.9299 1.7181 10.2898Z"
            stroke="#6A7981"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#6A7981"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg">

        {/* HEADER */}
        <div className="flex justify-between items-start px-6 py-5 border-b">
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-teal-600/20 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.3337 17.5V15.8333C13.3337 14.9493 12.9825 14.1014 12.3573 13.4763C11.7322 12.8512 10.8844 12.5 10.0003 12.5H5.00033C4.11627 12.5 3.26842 12.8512 2.6433 13.4763C2.01818 14.1014 1.66699 14.9493 1.66699 15.8333V17.5"
                  stroke="#3FA284" strokeWidth="1.6"/>
                <path d="M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z"
                  stroke="#3FA284" strokeWidth="1.6"/>
              </svg>
            </div>

            <div>
              <h2 className="text-lg font-medium text-slate-900">
                Invite Team Member
              </h2>
              <p className="text-xs text-gray-500">
                Send an invitation to join your workspace
              </p>
            </div>
          </div>

          <button onClick={onClose}>✕</button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-900">
              Email Address
            </label>

            <div className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="evelyn-rodriguez@hotmail.com"
                className="w-full h-11 bg-gray-50 rounded-md border border-gray-200 pl-10 pr-3 text-sm"
              />

              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="16" height="16" fill="none">
                  <path
                    d="M13.333 2.6665H2.66634C1.92996 2.6665 1.33301 3.26346 1.33301 3.99984V11.9998C1.33301 12.7362 1.92996 13.3332 2.66634 13.3332H13.333C14.0694 13.3332 14.6663 12.7362 14.6663 11.9998V3.99984"
                    stroke="#6A7981"
                    strokeWidth="1.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Roles */}
          <div>
            <label className="text-sm font-medium text-gray-900">
              Role
            </label>

            <div className="flex gap-3 mt-2">
              {roles.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setRole(item.name)}
                  className={`flex-1 h-16 rounded-xl border flex flex-col items-center justify-center gap-1
                    ${
                      role === item.name
                        ? "border-teal-600 bg-teal-50"
                        : "border-gray-200"
                    }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <span className="text-xs font-medium text-gray-900">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 h-10 border rounded-md text-sm"
          >
            Cancel
          </button>

        <button
  onClick={() => {
    console.log(email, role);
    onClose();
  }}
  className="px-4 h-10 bg-teal-900 text-white rounded-md text-sm flex items-center gap-2"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M13.333 2.6665H2.66634C1.92996 2.6665 1.33301 3.26346 1.33301 3.99984V11.9998C1.33301 12.7362 1.92996 13.3332 2.66634 13.3332H13.333C14.0694 13.3332 14.6663 12.7362 14.6663 11.9998V3.99984C14.6663 3.26346 14.0694 2.6665 13.333 2.6665Z"
      stroke="white"
      strokeWidth="1.333"
    />
    <path
      d="M14.6663 4.6665L8.68634 8.4665C8.48052 8.59545 8.24255 8.66384 7.99967 8.66384C7.7568 8.66384 7.51883 8.59545 7.31301 8.4665L1.33301 4.6665"
      stroke="white"
      strokeWidth="1.333"
    />
  </svg>

  Send Invite
</button>
        </div>
      </div>
    </div>
  );
};

export default InviteMemberModal;