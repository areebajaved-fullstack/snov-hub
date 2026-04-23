import { useState, useRef } from "react";

const PersonalityStep = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Gemini 1.5 Pro");
  const [image, setImage] = useState(null);

  const [temperature, setTemperature] = useState(0.7);
  const [memory, setMemory] = useState(10);

  const fileInputRef = useRef(null);

  const options = [
    "Gemini 1.5 Pro",
    "Gemini 1.5 Flash",
    "Gemini 1.5 Lite",
  ];

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full max-w-[544px] flex flex-col gap-4 font-Poppins">

      {/* TOP ROW */}
      <div className="flex gap-4">

        {/* Agent Name */}
        <div className="w-64 flex flex-col gap-1.5">
          <label className="text-sm text-gray-900 tracking-wide ">
            Agent Name <span className="text-red-600">*</span>
          </label>
          <input
            placeholder="e.g., Support Assistant"
            className="h-10 px-3 bg-stone-50 rounded-[10px] outline outline-1 outline-zinc-200 text-sm placeholder:text-slate-500"
          />
        </div>

        {/* MODEL DROPDOWN */}
        <div className="w-64 flex flex-col gap-1.5 relative">
          <label className="text-sm text-gray-900 tracking-wide">
            Model <span className="text-red-600">*</span>
          </label>

          <div
            onClick={() => setOpen(!open)}
            className="h-10 px-3 flex items-center bg-stone-50 rounded-[10px] outline outline-1 outline-zinc-200 cursor-pointer text-sm text-gray-500"
          >
            {selected}
          </div>

          {open && (
            <div className="absolute top-[70px] w-56 p-3 bg-white rounded-[10px] outline outline-1 shadow z-10">
              <div className="flex flex-col gap-2">

                <div className="h-8 px-3 bg-teal-600/10 rounded-lg outline outline-[1.3px] outline-teal-600 flex items-center text-xs text-emerald-950 tracking-wide">
                  All Models
                </div>

                {options.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                    className="text-xs text-gray-500 cursor-pointer hover:text-gray-900 "
                  >
                    {opt}
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      </div>

      {/* AVATAR */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-900 tracking-wide font-Poppins">Avatar</label>

        <div className="flex items-center gap-3">

          {/* Avatar Box */}
          <div
            onClick={() => fileInputRef.current.click()}
            className="w-16 h-16 bg-gray-100 rounded-xl border-2 border-dashed border-zinc-300 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            {image ? (
              <img src={image} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V4H8" stroke="#6F7D90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 8H6C4.895 8 4 8.895 4 10V18C4 19.105 4.895 20 6 20H18C19.105 20 20 19.105 20 18V10C20 8.895 19.105 8 18 8Z" stroke="#6F7D90" strokeWidth="2"/>
                <path d="M2 14H4" stroke="#6F7D90" strokeWidth="2"/>
                <path d="M20 14H22" stroke="#6F7D90" strokeWidth="2"/>
                <path d="M15 13V15" stroke="#6F7D90" strokeWidth="2"/>
                <path d="M9 13V15" stroke="#6F7D90" strokeWidth="2"/>
              </svg>
            )}
          </div>

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current.click()}
            className="px-3 py-1.5 bg-stone-50 rounded-[10px]  tracking-wide font-Poppins outline outline-1 outline-zinc-200 flex items-center gap-2 text-sm"
          >
            {/* FIXED COMPLETE SVG */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3337 5.33333L8.00033 2L4.66699 5.33333" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V10" stroke="#121821" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            Upload
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* GREETING */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-gray-900  tracking-wide font-Poppins">Welcome Greeting</label>
        <textarea
          placeholder="e.g., Hi there! 👋 How can I help you today?"
          className="h-20 px-3 py-2 bg-stone-50 rounded-[10px] outline outline-1 outline-zinc-200 text-sm"
        />
      </div>

      {/* SLIDERS */}
      <div className="flex justify-between">

        {/* Temperature */}
        <div className="w-64 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-base font-medium text-slate-900  tracking-wide font-Poppins">Temperature</span>
            <span className="text-sm font-semibold text-teal-600  tracking-wide font-Poppins">{temperature.toFixed(1)}</span>
          </div>

          <div className="relative h-2 bg-zinc-100 rounded-full">
            <div className="absolute h-2 bg-teal-600 rounded-full tracking-wide font-Poppins" style={{ width: `${temperature * 100}%` }} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Memory */}
        <div className="w-64 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-base font-medium text-slate-900  tracking-wide font-Poppins">Memory Window</span>
            <span className="text-sm font-semibold text-teal-600  tracking-wide font-Poppins">{memory} msgs</span>
          </div>

          <div className="relative h-2 bg-zinc-100 rounded-full">
            <div className="absolute h-2 bg-teal-600 rounded-full  tracking-wide font-Poppins" style={{ width: `${(memory / 50) * 100}%` }} />
            <input
              type="range"
              min="1"
              max="50"
              value={memory}
              onChange={(e) => setMemory(parseInt(e.target.value))}
              className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default PersonalityStep;