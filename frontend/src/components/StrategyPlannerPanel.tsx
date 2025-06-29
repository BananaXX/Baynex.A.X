import React, { useState, useEffect } from 'react';

interface PlannerProps {
  platform: string;
  currentStrategy: string;
  strategies: string[];
  onSwitch: (strategy: string) => void;
  onPause: () => void;
  onSetGoal: (profit: number, deadline: number) => void;
  onToggleFlashMode: () => void;
  onToggleLearningBooster: () => void;
  flashMode: boolean;
  learningBooster: boolean;
}

export const StrategyPlannerPanel: React.FC<PlannerProps> = ({
  platform,
  currentStrategy,
  strategies,
  onSwitch,
  onPause,
  onSetGoal,
  onToggleFlashMode,
  onToggleLearningBooster,
  flashMode,
  learningBooster,
}) => {
  const [goal, setGoal] = useState<number>(0);
  const [deadline, setDeadline] = useState<number>(60);

  const submitGoal = () => {
    if (goal > 0 && deadline > 0) {
      onSetGoal(goal, deadline);
    }
  };

  return (
    <div className="bg-zinc-900 text-white rounded-lg p-4 mt-6 border border-orange-500 shadow-xl">
      <h2 className="text-orange-400 text-lg font-bold mb-2">
        🎯 Strategy Planner ({platform})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="text-zinc-300 block mb-1">Current Strategy</label>
          <div className="bg-black border border-zinc-700 rounded px-3 py-2">{currentStrategy}</div>
        </div>

        <div>
          <label className="text-zinc-300 block mb-1">Switch Strategy</label>
          <select
            className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2"
            onChange={(e) => onSwitch(e.target.value)}
          >
            {strategies.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-zinc-300 block mb-1">Goal Profit ($)</label>
          <input
            type="number"
            className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            placeholder="e.g. 10"
          />
        </div>

        <div>
          <label className="text-zinc-300 block mb-1">Deadline (min)</label>
          <input
            type="number"
            className="w-full bg-black text-white border border-zinc-700 rounded px-3 py-2"
            value={deadline}
            onChange={(e) => setDeadline(Number(e.target.value))}
            placeholder="e.g. 60"
          />
        </div>

        <div className="col-span-1 md:col-span-2 flex items-center justify-between mt-3">
          <button
            onClick={submitGoal}
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-1 px-4 rounded"
          >
            Set Goal
          </button>

          <button
            onClick={onPause}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
          >
            Pause Strategy
          </button>
        </div>

        <div className="col-span-1 md:col-span-2 mt-4 flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={flashMode} onChange={onToggleFlashMode} />
            <span className="text-orange-300">⚡ Flash Mode</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={learningBooster} onChange={onToggleLearningBooster} />
            <span className="text-green-400">📚 Learning Booster</span>
          </label>
        </div>
      </div>
    </div>
  );
};
