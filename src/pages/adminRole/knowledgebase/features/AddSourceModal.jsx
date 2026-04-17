import React, { useState } from 'react';
import FileSourcePanel from './FileSourcePanel';
import WebsiteSourcePanel from './WebsiteSourcePanel';
import ManualSourcePanel from './ManualSourcePanel';

const AddSourceModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('file');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container: w-[512px] h-[550px] approx to match image proportions */}
      <div className="relative w-[512px] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 outline outline-1 outline-offset-[-1px] outline-gray-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-[17px] top-[17px] text-[#182125] opacity-70 hover:opacity-100 transition-opacity z-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L12 12" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header: Exact h-20 from snippet */}
        <div className="h-20 px-6 pt-6 pb-4 bg-white border-b border-gray-200 flex items-center gap-3">
          <div className="size-10 bg-teal-600/10 rounded-xl backdrop-blur-xs flex justify-center items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.83325V17.4999" stroke="#3FA284" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.50033 15C2.27931 15 2.06735 14.9122 1.91107 14.7559C1.75479 14.5996 1.66699 14.3877 1.66699 14.1667V3.33333C1.66699 3.11232 1.75479 2.90036 1.91107 2.74408C2.06735 2.5878 2.27931 2.5 2.50033 2.5H6.66699C7.55105 2.5 8.39889 2.85119 9.02401 3.47631C9.64914 4.10143 10.0003 4.94928 10.0003 5.83333C10.0003 4.94928 10.3515 4.10143 10.9766 3.47631C11.6018 2.85119 12.4496 2.5 13.3337 2.5H17.5003C17.7213 2.5 17.9333 2.5878 18.0896 2.74408C18.2459 2.90036 18.3337 3.11232 18.3337 3.33333V14.1667C18.3337 14.3877 18.2459 14.5996 18.0896 14.7559C17.9333 14.9122 17.7213 15 17.5003 15H12.5003C11.8373 15 11.2014 15.2634 10.7326 15.7322C10.2637 16.2011 10.0003 16.837 10.0003 17.5C10.0003 16.837 9.73693 16.2011 9.26809 15.7322C8.79925 15.2634 8.16337 15 7.50033 15H2.50033Z" stroke="#3FA284" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-emerald-950 text-lg font-medium font-['Inter_Tight'] leading-7">Add Knowledge Source</h2>
            <p className="text-gray-500 text-xs font-normal font-['Inter_Tight'] leading-4">Train your agents with custom data</p>
          </div>
        </div>

        {/* Modal Body / Tab Container: Exactly h-80 px-6 py-5 from snippet */}
        <div className="w-[510px] min-h-[320px] px-6 py-5 bg-white">
          <div className="flex flex-col gap-5">
            {/* Tab Navigation: bg-neutral-100 h-10 rounded-md */}
            <div className="w-full h-10 px-2 py-1 bg-neutral-100 rounded-md flex items-center">
              {[
                { id: 'file', label: 'File Upload', icon: (active) => (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.91634 4.66667L6.99967 1.75L4.08301 4.66667" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 1.75V8.75" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
                { id: 'website', label: 'Website', icon: (active) => (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00033 12.8334C10.222 12.8334 12.8337 10.2217 12.8337 7.00008C12.8337 3.77842 10.222 1.16675 7.00033 1.16675C3.77866 1.16675 1.16699 3.77842 1.16699 7.00008C1.16699 10.2217 3.77866 12.8334 7.00033 12.8334Z" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.00033 1.16675C5.50246 2.7395 4.66699 4.82818 4.66699 7.00008C4.66699 9.17198 5.50246 11.2607 7.00033 12.8334C8.49819 11.2607 9.33366 9.17198 9.33366 7.00008C9.33366 4.82818 8.49819 2.7395 7.00033 1.16675Z" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.16699 7H12.8337" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
                { id: 'manual', label: 'Manual', icon: (active) => (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74967 1.16675H3.49967C3.19026 1.16675 2.89351 1.28966 2.67472 1.50846C2.45592 1.72725 2.33301 2.024 2.33301 2.33341V11.6667C2.33301 11.9762 2.45592 12.2729 2.67472 12.4917C2.89351 12.7105 3.19026 12.8334 3.49967 12.8334H10.4997C10.8091 12.8334 11.1058 12.7105 11.3246 12.4917C11.5434 12.2729 11.6663 11.9762 11.6663 11.6667V4.08341L8.74967 1.16675Z" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.16699 1.16675V3.50008C8.16699 3.8095 8.28991 4.10625 8.5087 4.32504C8.72749 4.54383 9.02424 4.66675 9.33366 4.66675H11.667" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83366 5.25H4.66699" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33366 7.58325H4.66699" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33366 9.91675H4.66699" stroke={active ? 'white' : '#6A7981'} strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )},
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 h-8 rounded-md flex items-center justify-center gap-1.5 transition-all duration-200 ${
                      isActive 
                        ? 'bg-teal-600 text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] font-normal' 
                        : 'text-gray-500 hover:text-emerald-950 font-normal'
                    }`}
                  >
                    {tab.icon(isActive)}
                    <span className="text-xs font-['Inter_Tight'] leading-4">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Panel Area */}
            <div className="flex-1">
              {activeTab === 'file' && <FileSourcePanel onUpload={() => {}} />}
              {activeTab === 'website' && <WebsiteSourcePanel onCrawl={() => {}} />}
              {activeTab === 'manual' && <ManualSourcePanel onSave={() => {}} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSourceModal;
