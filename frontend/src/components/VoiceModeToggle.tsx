import React from 'react';

interface VoiceModeToggleProps {
  mode: 'Smart' | 'Full' | 'Silent';
  onChange: (mode: 'Smart' | 'Full' | 'Silent') => void;
}

const modes = ['Smart', 'Full', 'Silent'] as const;

export default function VoiceModeToggle({ mode, onChange }: VoiceModeToggleProps) {
  return (
    <div className="flex gap-2 items-center p-2 rounded-xl bg-black/40 text-white">
      <label className="text-sm font-medium">Voice Mode:</label>
      {modes.map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={`px-3 py-1 rounded-md ${
            mode === m ? 'bg-red-500 text-white font-bold' : 'bg-gray-700'
          }`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
