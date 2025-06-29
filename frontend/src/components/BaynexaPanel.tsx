import React from 'react';

interface BaynexaPanelProps {
  message: string;
  voiceMode: 'Silent' | 'Smart' | 'Full';
  onMuteToggle: () => void;
  onVoiceModeChange: (mode: 'Silent' | 'Smart' | 'Full') => void;
}

export const BaynexaPanel: React.FC<BaynexaPanelProps> = ({
  message,
  voiceMode,
  onMuteToggle,
  onVoiceModeChange,
}) => {
  return (
    <div className="bg-black text-white border border-orange-500 rounded-2xl p-4 mt-4 shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-orange-400 font-semibold text-lg">💬 Baynexa</h2>
        <select
          className="bg-gray-900 border border-orange-400 text-white rounded px-2 py-1 text-sm"
          value={voiceMode}
          onChange={(e) =>
            onVoiceModeChange(e.target.value as 'Silent' | 'Smart' | 'Full')
          }
        >
          <option value="Silent">🔕 Silent</option>
          <option value="Smart">🧠 Smart</option>
          <option value="Full">🔊 Full</option>
        </select>
      </div>
      <div className="bg-orange-500 text-black rounded-xl px-4 py-2 text-sm font-medium shadow-inner">
        {message}
      </div>
    </div>
  );
};
