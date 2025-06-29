import React from 'react';

interface TopStrategyProps {
  bestStrategy: {
    name: string;
    winRate: number;
    pnl: number;
  } | null;
}

export const TopPanel: React.FC<TopStrategyProps> = ({ bestStrategy }) => {
  return (
    <div className="bg-gray-900 border border-orange-500 rounded-2xl p-4 shadow-lg text-white mt-4">
      <h2 className="text-lg font-bold text-orange-400 mb-2">📌 Top Strategy (Pinned)</h2>
      {bestStrategy ? (
        <div className="flex flex-col gap-1">
          <div>
            <span className="font-semibold">Name:</span> {bestStrategy.name}
          </div>
          <div>
            <span className="font-semibold">Win Rate:</span> {bestStrategy.winRate.toFixed(2)}%
          </div>
          <div>
            <span className="font-semibold">PnL:</span> ${bestStrategy.pnl.toFixed(2)}
          </div>
        </div>
      ) : (
        <div className="text-gray-400">No strategy pinned yet.</div>
      )}
    </div>
  );
};
