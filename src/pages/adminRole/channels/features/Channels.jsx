import React, { useState } from 'react';
import WebsiteWidget from './WebsiteWidget';
import Integrations from './Integrations';
import AddChannelModal from './AddChannel';

const Channels = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [showAddChannel, setShowAddChannel] = useState(false);
  const [channels, setChannels] = useState([]);

  const handleAddChannel = (newChannel) => {
    setChannels([...channels, newChannel]);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Tab Navigation */}
      <div data-layer="Frame 3" className="Frame3 self-stretch inline-flex justify-between items-start">
        <div data-layer="Tablist" className="Tablist size- p-1 bg-gray-200 rounded-[10px] flex justify-center items-center">
          <div 
            data-layer="Tab" 
            className={`Tab size- px-3 py-1.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 ${
              activeTab === 'website' 
                ? 'bg-teal-600 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                : ''
            }`}
            onClick={() => setActiveTab('website')}
          >
            <div data-svg-wrapper data-layer="SVG" className="Svg relative">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_689_2635)">
                  <path d="M7.00033 12.8332C10.222 12.8332 12.8337 10.2215 12.8337 6.99984C12.8337 3.77818 10.222 1.1665 7.00033 1.1665C3.77866 1.1665 1.16699 3.77818 1.16699 6.99984C1.16699 10.2215 3.77866 12.8332 7.00033 12.8332Z" stroke={activeTab === 'website' ? "white" : "#6B7280"} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.00033 1.1665C5.50246 2.73926 4.66699 4.82794 4.66699 6.99984C4.66699 9.17174 5.50246 11.2604 7.00033 12.8332C8.49819 11.2604 9.33366 9.17174 9.33366 6.99984C9.33366 4.82794 8.49819 2.73926 7.00033 1.1665Z" stroke={activeTab === 'website' ? "white" : "#6B7280"} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.16699 7H12.8337" stroke={activeTab === 'website' ? "white" : "#6B7280"} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_689_2635">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div data-layer="Website Widget" className={`WebsiteWidget text-center justify-center text-sm font-normal font-['Inter Tight'] leading-5 ${
              activeTab === 'website' ? 'text-white' : 'text-gray-500'
            }`}>Website Widget</div>
          </div>
          <div 
            data-layer="Tab" 
            className={`Tab size- px-3 py-1.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-200 ${
              activeTab === 'integrations' 
                ? 'bg-teal-600 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]' 
                : ''
            }`}
            onClick={() => setActiveTab('integrations')}
          >
            <div data-svg-wrapper data-layer="SVG" className="Svg relative">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33337 8.16656C2.22298 8.16693 2.11475 8.13598 2.02126 8.0773C1.92776 8.01861 1.85284 7.9346 1.80519 7.83502C1.75754 7.73545 1.73912 7.6244 1.75208 7.51478C1.76503 7.40515 1.80882 7.30145 1.87837 7.21572L7.65337 1.26572C7.69669 1.21572 7.75572 1.18193 7.82078 1.1699C7.88583 1.15787 7.95304 1.16832 8.01138 1.19952C8.06972 1.23072 8.11571 1.28083 8.14182 1.34162C8.16792 1.40241 8.17258 1.47027 8.15504 1.53406L7.03504 5.04572C7.00201 5.13411 6.99092 5.22919 7.00271 5.32281C7.01451 5.41643 7.04884 5.50579 7.10276 5.58322C7.15667 5.66066 7.22857 5.72386 7.31228 5.7674C7.39599 5.81094 7.48901 5.83353 7.58337 5.83322H11.6667C11.7771 5.83285 11.8853 5.8638 11.9788 5.92249C12.0723 5.98117 12.1472 6.06518 12.1949 6.16476C12.2425 6.26433 12.2609 6.37538 12.248 6.48501C12.235 6.59463 12.1912 6.69833 12.1217 6.78406L6.3467 12.7341C6.30338 12.7841 6.24435 12.8178 6.1793 12.8299C6.11424 12.8419 6.04703 12.8315 5.98869 12.8003C5.93036 12.7691 5.88436 12.719 5.85826 12.6582C5.83215 12.5974 5.82749 12.5295 5.84504 12.4657L6.96504 8.95406C6.99806 8.86567 7.00915 8.77059 6.99736 8.67697C6.98556 8.58335 6.95123 8.49399 6.89732 8.41656C6.8434 8.33912 6.7715 8.27592 6.68779 8.23238C6.60408 8.18884 6.51106 8.16625 6.4167 8.16656H2.33337Z" stroke={activeTab === 'integrations' ? "white" : "#6B7280"} stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div data-layer="Integrations" className={`Integrations text-center justify-center text-sm font-normal font-['Inter Tight'] leading-5 ${
              activeTab === 'integrations' ? 'text-white' : 'text-gray-500'
            }`}>Integrations</div>
          </div>
        </div>
        {/* Add Channel Button - Only show on Integrations tab */}
        {activeTab === 'integrations' && (
          <div 
            data-layer="Button" 
            className="Button h-10 px-4 py-2 bg-emerald-950 rounded-[10px] flex justify-center items-center gap-2 cursor-pointer"
            onClick={() => setShowAddChannel(true)}
          >
            <div data-svg-wrapper data-layer="SVG" className="Svg relative">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.3337 5.33333L8.00033 2L4.66699 5.33333" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 2V10" stroke="#F2F8F6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div data-layer="Add Channel" className="AddChannel text-center justify-center text-white text-sm font-medium font-['Inter Tight'] leading-5">Add Channel</div>
          </div>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === 'website' ? (
        <WebsiteWidget />
      ) : (
        <Integrations channels={channels} />
      )}
      
      {/* Add Channel Modal */}
      {showAddChannel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowAddChannel(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <AddChannelModal onClose={() => setShowAddChannel(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Channels;
