import React from 'react';

type Platform = 'deriv' | 'mt5' | 'iqoption';

interface PlatformSwitcherProps {
  currentPlatform: Platform;
  onSwitch: (platform: Platform) => void;
}

export default function PlatformSwitcher({ currentPlatform, onSwitch }: PlatformSwitcherProps) {
  return (
    <div className="flex space-x-2 justify-center my-4">
      {(['deriv', 'mt5', 'iqoption'] as Platform[]).map((platform) => (
        <button
          key={platform}
          className={`px-4 py-2 rounded-lg text-white transition-all ${
            currentPlatform === platform
              ? 'bg-red-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
          onClick={() => onSwitch(platform)}
        >
          {platform.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
