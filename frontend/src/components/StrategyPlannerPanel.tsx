import React, { useState, useEffect } from 'react';

export const StrategyPlannerPanel: React.FC = () => {
  const [strategy, setStrategy] = useState('momentum');
  const [platform, setPlatform] = useState('deriv');
  const [flash, setFlash] = useState(false);
  const [booster, setBooster] = useState(false);

  useEffect(() => {
    fetch(`/api/strategy/${platform}`)
      .then(res => res.json())
      .then(data => {
        setStrategy(data.strategy || 'momentum');
        setFlash(data.flashMode || false);
        setBooster(data.learningBooster || false);
      });
  }, [platform]);

  const update = () => {
    fetch(`/api/strategy/${platform}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ strategy, flashMode: flash, learningBooster: booster }),
    });
  };

  return (
    <div className="bg-black text-white p-4 rounded-xl border border-orange-500 shadow">
      <h2 className="text-lg font-bold text-orange-400 mb-2">📊 Strategy Planner</h2>
      <select value={platform} onChange={e => setPlatform(e.target.value)} className="mb-2 p-2 bg-black border border-orange-500">
        <option value="deriv">Deriv</option>
        <option value="iqoption">IQ Option</option>
        <option value="mt5">MT5</option>
      </select>
      <select value={strategy} onChange={e => setStrategy(e.target.value)} className="mb-2 p-2 w-full bg-black border border-orange-500">
        <option value="momentum">Momentum</option>
        <option value="reversal">Reversal</option>
        <option value="swing">Swing</option>
        <option value="scalping">Scalping</option>
        <option value="adaptive">Adaptive (Smart)</option>
      </select>
      <div className="flex items-center gap-2 mb-2">
        <label>
          <input type="checkbox" checked={flash} onChange={() => setFlash(!flash)} />
          Flash Mode
        </label>
        <label>
          <input type="checkbox" checked={booster} onChange={() => setBooster(!booster)} />
          Learning Booster
        </label>
      </div>
      <button onClick={update} className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-xl">
        Update Strategy
      </button>
    </div>
  );
};
