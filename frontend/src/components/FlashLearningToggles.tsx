import React from 'react';

interface Props {
  flashMode: boolean;
  learningBooster: boolean;
  onFlashToggle: () => void;
  onLearningToggle: () => void;
}

export const FlashLearningToggles: React.FC<Props> = ({
  flashMode,
  learningBooster,
  onFlashToggle,
  onLearningToggle,
}) => {
  return (
    <div className="bg-gray-900 border border-orange-500 rounded-2xl p-4 shadow text-white mt-4">
      <h2 className="text-orange-400 font-bold mb-2">⚙️ Advanced Features</h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span>🚀 Flash Mode</span>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              flashMode ? 'bg-orange-500 text-black' : 'bg-gray-700'
            }`}
            onClick={onFlashToggle}
          >
            {flashMode ? 'ON' : 'OFF'}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span>📚 Learning Booster</span>
          <button
            className={`px-3 py-1 rounded-md text-sm ${
              learningBooster ? 'bg-orange-500 text-black' : 'bg-gray-700'
            }`}
            onClick={onLearningToggle}
          >
            {learningBooster ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </div>
  );
};
