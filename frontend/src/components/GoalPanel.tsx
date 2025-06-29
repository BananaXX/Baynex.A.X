import React, { useEffect, useState } from 'react';

export const GoalPanel: React.FC = () => {
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [platform, setPlatform] = useState('deriv');

  useEffect(() => {
    fetch(`/api/goal/${platform}`)
      .then(res => res.json())
      .then(data => {
        if (data?.goal) {
          setTarget(data.goal.target);
          setDeadline(data.goal.deadline);
        }
      });
  }, [platform]);

  const updateGoal = () => {
    fetch(`/api/goal/${platform}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target, deadline }),
    });
  };

  return (
    <div className="p-4 bg-black text-white rounded-xl shadow-md border border-orange-500">
      <h2 className="text-lg font-bold text-orange-400 mb-2">🎯 Goal Manager</h2>
      <select value={platform} onChange={e => setPlatform(e.target.value)} className="mb-2 p-2 bg-black border border-orange-500">
        <option value="deriv">Deriv</option>
        <option value="iqoption">IQ Option</option>
        <option value="mt5">MT5</option>
      </select>
      <input
        type="text"
        value={target}
        placeholder="Target Profit $"
        onChange={e => setTarget(e.target.value)}
        className="mb-2 p-2 w-full bg-black border border-orange-500"
      />
      <input
        type="text"
        value={deadline}
        placeholder="Deadline (e.g. 1h, 24h)"
        onChange={e => setDeadline(e.target.value)}
        className="mb-2 p-2 w-full bg-black border border-orange-500"
      />
      <button
        onClick={updateGoal}
        className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded-xl"
      >
        Save Goal
      </button>
    </div>
  );
};
   
