// frontend/src/components/StrategyPanel.tsx
import React from 'react';

const strategies = ['Momentum', 'Reversal', 'Swing', 'Scalping', 'AI Fusion'];

const StrategyPanel = ({ activeStrategy, onSwitch }: { activeStrategy: string; onSwitch: (strategy: string) => void }) => {
  return (
    <div className="p-4 rounded-xl bg-black border border-orange-400 shadow-md w-full">
      <h2 className="text-xl font-semibold mb-2 text-orange-400">🎯 Strategy Planner</h2>
      <div className="flex flex-wrap gap-2">
        {strategies.map((strategy) => (
          <button
            key={strategy}
            onClick={() => onSwitch(strategy)}
            className={`px-4 py-2 rounded-full border text-sm ${
              strategy === activeStrategy
                ? 'bg-orange-600 text-white'
                : 'border-orange-400 text-orange-300 hover:bg-orange-900'
            }`}
          >
            {strategy}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StrategyPanel;
