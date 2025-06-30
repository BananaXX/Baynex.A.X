import React, { useEffect, useState } from 'react';
import { getLogs } from '../api/logs';

interface LogEntry {
  timestamp: string;
  type: string;
  message: string;
  platform: string;
}

export default function LogsPanel() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [timeframe, setTimeframe] = useState('today');

  useEffect(() => {
    async function fetchLogs() {
      const result = await getLogs(timeframe);
      if (result) setLogs(result);
    }
    fetchLogs();
  }, [timeframe]);

  return (
    <div className="p-4 mt-4 bg-black text-white rounded-xl shadow-md max-w-5xl mx-auto">
      <h2 className="text-xl font-bold mb-2">📜 Real-Time Strategy Logs</h2>
      <div className="mb-3">
        <label className="mr-2">Timeframe:</label>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="p-2 text-black"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="all">All Time</option>
        </select>
      </div>
      <div className="overflow-y-scroll max-h-96 border border-gray-700 rounded-lg p-2 bg-gray-900">
        {logs.length === 0 ? (
          <p className="text-gray-400 text-sm">No logs available.</p>
        ) : (
          logs.map((log, idx) => (
            <div key={idx} className="border-b border-gray-700 py-1">
              <div className="text-xs text-gray-400">{log.timestamp}</div>
              <div>
                <span className="font-bold text-orange-400">{log.platform.toUpperCase()}</span>{' '}
                <span className="text-blue-400">{log.type}:</span> {log.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
