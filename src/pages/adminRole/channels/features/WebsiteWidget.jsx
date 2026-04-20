import React, { useState } from 'react';
import {
  GlobeTabIcon,
  FlashTabIcon,
  PaletteIcon,
  DesktopIcon,
  ChatWidgetIcon
} from '../../../../assets/icons/icons';

const WebsiteWidget = () => {
  const [selectedColor, setSelectedColor] = useState('#0B3D3B');
  const [selectedPosition, setSelectedPosition] = useState('bottom-right');
  const [showBranding, setShowBranding] = useState(true);

  const colors = [
    { value: '#0B3D3B', label: 'Dark Teal' },
    { value: '#1F7A72', label: 'Teal' },
    { value: '#2563EB', label: 'Blue' },
    { value: '#7C3AED', label: 'Purple' },
    { value: '#DC2626', label: 'Red' }
  ];

  const positions = [
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-left', label: 'Bottom Left' }
  ];

  const getChatWidgetPosition = () => {
    switch (selectedPosition) {
      case 'bottom-right':
        return 'right-4 bottom-4';
      case 'bottom-left':
        return 'left-4 bottom-4';
      default:
        return 'right-4 bottom-4';
    }
  };

  return (
    <div className="flex gap-6 mt-4">
      {/* Appearance Section */} 
      <div data-layer="Background+Border+Shadow" className="w-[402px] BackgroundBorderShadow self-stretch px-5 pt-5 pb-12 bg-gray-50 rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start gap-5">
        <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center gap-2">
          <div data-svg-wrapper data-layer="SVG" className="Svg relative">
            <PaletteIcon />
          </div>
          <div data-layer="Heading 3" className="Heading3 size- inline-flex flex-col justify-start items-start">
            <div data-layer="Appearance" className="Appearance justify-center text-slate-900 text-sm font-medium font-['Inter Tight'] leading-5">Appearance</div>
          </div>
        </div>

        <div data-layer="Container" className="Container self-stretch pt-[5px] flex flex-col justify-start items-start gap-2.5">
          <div data-layer="Label -> Accent Color" className="LabelAccentColor justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Accent Color</div>
          <div data-layer="Container" className="Container self-stretch h-8 relative">
            <div data-svg-wrapper data-layer="Button" className="Button left-[-1.60px] top-0 absolute" onClick={() => setSelectedColor('#0B3D3B')}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="35.2" height="35.2" rx="12" fill="#0B3D3B"/>
                <g filter="url(#filter0_dd_657_10326)">
                  <rect x="4" y="4" width="35.2" height="35.2" rx="12" fill="white" fill-opacity="0.01" shape-rendering="crispEdges"/>
                </g>
                <defs>
                  <filter id="filter0_dd_657_10326" x="0" y="0" width="43.2002" height="43.2002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_657_10326"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0.239216 0 0 0 0 0.215686 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_657_10326"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_657_10326"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_657_10326" result="effect2_dropShadow_657_10326"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_657_10326" result="shape"/>
                  </filter>
                </defs>
              </svg>
            </div>
            <div data-svg-wrapper data-layer="Button" className="Button left-[40px] top-0 absolute" onClick={() => setSelectedColor('#1F7A72')}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="12" fill="#1F7A72"/>
              </svg>
            </div>
            <div data-svg-wrapper data-layer="Button" className="Button left-[80px] top-0 absolute" onClick={() => setSelectedColor('#2563EB')}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="12" fill="#2563EB"/>
              </svg>
            </div>
            <div data-svg-wrapper data-layer="Button" className="Button left-[120px] top-0 absolute" onClick={() => setSelectedColor('#7C3AED')}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="12" fill="#7C3AED"/>
              </svg>
            </div>
            <div data-svg-wrapper data-layer="Button" className="Button left-[160px] top-0 absolute" onClick={() => setSelectedColor('#DC2626')}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="12" fill="#DC2626"/>
              </svg>
            </div>
          </div>
        </div>

        <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-1">
          <div data-layer="Label -> Position" className="LabelPosition justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Position</div>
          <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-start gap-2">
            {positions.map((position) => (
              <button
                key={position.value}
                data-layer="Button"
                className={`Button h-9 px-3 rounded-[10px] flex justify-center items-center transition-all duration-200 ${
                  selectedPosition === position.value
                    ? 'bg-cyan-950 text-white'
                    : 'bg-gray-50 outline outline-1 outline-offset-[-1px] outline-gray-200 text-slate-900 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedPosition(position.value)}
              >
                <div data-layer={position.label.replace(' ', '')} className={`${position.label.replace(' ', '')} text-center justify-center text-sm font-normal font-['Inter Tight'] leading-5`}>
                  {position.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div data-layer="HorizontalBorder" className="Horizontalborder self-stretch pt-2 border-t border-gray-200 inline-flex justify-between items-center">
          <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Show Powered by branding" className="ShowPoweredByBranding justify-center text-slate-900 text-sm font-normal font-['Inter Tight'] leading-5">Show "Powered by" branding</div>
            </div>
            <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
              <div data-layer="Display AgentFlow badge in widget" className="DisplayAgentflowBadgeInWidget justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Display AgentFlow badge in widget</div>
            </div>
          </div>
          <button
            data-layer="Switch"
            className={`Switch w-11 h-6 rounded-full outline outline-2 outline-offset-[-2px] outline-black/0 flex justify-start items-center transition-all duration-300 cursor-pointer ${
              showBranding ? 'pl-5 bg-cyan-950' : 'pl-1 bg-gray-300'
            }`}
            onClick={() => setShowBranding(!showBranding)}
          >
            <div data-svg-wrapper data-layer="Background" className="Background relative">
              <div className={`w-5 h-5 bg-white rounded-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                showBranding ? 'translate-x-0' : 'translate-x-0'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Live Preview Section */}
      <div data-layer="Background+Border+Shadow" className="w-[673px] BackgroundBorderShadow self-stretch bg-white rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start overflow-hidden">
        <div data-layer="Overlay+HorizontalBorder" className="OverlayHorizontalborder self-stretch px-4 py-2.5 bg-gray-100/40 border-b border-gray-200 inline-flex justify-start items-center gap-2">
          <div data-svg-wrapper data-layer="SVG" className="Svg relative">
            <DesktopIcon />
          </div>
          <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
            <div data-layer="Live Preview" className="LivePreview justify-center text-gray-500 text-xs font-normal font-['Inter Tight'] leading-4">Live Preview</div>
          </div>
        </div>
        <div data-layer="Background" className="Background self-stretch h-72 p-4 relative bg-gradient-to-b from-gray-100 to-gray-50 flex flex-col justify-start items-start">
          <div data-layer="Background+Border" className="BackgroundBorder self-stretch px-3 py-2 bg-white rounded-tl-xl rounded-tr-xl border-l border-r border-t border-gray-200 inline-flex justify-start items-center gap-2">
            <div data-svg-wrapper data-layer="Container" className="Container">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-40"></div>
              </div>
            </div>
            <div data-layer="Margin" className="Margin flex-1 h-5 pl-2 inline-flex flex-col justify-start items-start">
              <div data-layer="Background" className="Background self-stretch h-5 bg-gray-100 rounded-sm" />
            </div>
          </div>
          <div data-layer="Overlay+Border" className="OverlayBorder self-stretch h-44 bg-white/60 rounded-bl-xl rounded-br-xl border-l border-r border-b border-gray-200" />
          <div data-layer="Container" className={`Container size- left-[558.34px] top-[200px] absolute flex flex-col justify-start items-start gap-1 transition-all duration-300 ${getChatWidgetPosition()}`}>
            <div 
              data-layer="Background+Shadow" 
              className="BackgroundShadow size-12 rounded-full shadow-[0px_8px_30px_0px_rgba(0,0,0,0.08)] inline-flex justify-center items-center"
              style={{ backgroundColor: selectedColor }}
            >
              <div data-svg-wrapper data-layer="SVG" className="Svg relative">
                <ChatWidgetIcon />
              </div>
            </div>
            {showBranding && (
              <div data-layer="Container" className="Container size- flex flex-col justify-start items-center">
                <div data-layer="Powered by AgentFlow" className="PoweredByAgentflow text-center justify-center text-gray-500 text-[8px] font-normal font-['Inter Tight'] leading-3">Powered by AgentFlow</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteWidget;
