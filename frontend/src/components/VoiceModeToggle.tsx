import React from 'react';

interface Props {
  voiceMode: 'Silent' | 'Smart' | 'Full';
  onChange: (mode: 'Silent' | 'Smart' | 'Full') => void;
}

export const VoiceModeToggle: React.FC<Props> = ({ voiceMode, onChange }) => {
  const modes: ('Silent' | 'Smart' | 'Full')[] = ['Silent', 'Smart', 'Full'];

  return (
    <div className="bg-gray-900 border border-orange-500 rounded-2xl p-4 shadow text-white mt-4">
      <h2 className="text-orange-400 font-bold mb-2">🎙️ Baynexa Voice Mode</h2>
      <div className="flex gap-4">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => onChange(mode)}
            className={`px-3 py-1 rounded-lg text-sm ${
              voiceMode === mode
                ? 'bg-orange-500 text-black font-bold'
                : 'bg-gray-700 text-white'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
    </div>
  );
};
