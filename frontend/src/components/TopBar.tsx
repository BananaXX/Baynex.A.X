import React from 'react';

interface TopBarProps {
  username?: string;
  onMuteToggle: () => void;
  voiceMode: 'Silent' | 'Smart' | 'Full';
}

export default function TopBar({ username, onMuteToggle, voiceMode }: TopBarProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white border-b border-gray-700">
      <h1 className="text-xl font-bold">🚀 BAYNEX.A.X System</h1>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <span className="text-gray-400">👤 Logged in as:</span> <strong>{username || 'Guest'}</strong>
        </div>
        <button
          onClick={onMuteToggle}
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full text-sm font-medium"
        >
          🔊 {voiceMode} Mode
        </button>
      </div>
    </div>
  );
}
