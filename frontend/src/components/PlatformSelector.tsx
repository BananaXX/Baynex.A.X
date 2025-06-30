import React from 'react';

interface PlatformSelectorProps {
  selectedPlatform: string;
  onChange: (platform: string) => void;
}

export default function PlatformSelector({ selectedPlatform, onChange }: PlatformSelectorProps) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mt-4 shadow-lg">
      <label className="block mb-2 font-semibold">Select Trading Platform:</label>
      <select
        value={selectedPlatform}
        onChange={(e) => onChange(e.target.value)}
        className="bg-black text-white border border-gray-600 px-3 py-2 rounded-md w-full"
      >
        <option value="deriv">Deriv</option>
        <option value="iqoption">IQ Option</option>
        <option value="mt5">MT5</option>
      </select>
    </div>
  );
}
