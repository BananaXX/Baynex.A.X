import React, { useEffect, useState } from 'react';

interface LogEntry {
  timestamp: string;
  message: string;
}

export const LogsPanel: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const fetchLogs = async () => {
    try {
      const response = await fetch('/api/logs');
      const data = await response.json();
      setLogs(data.logs || []);
    } catch (error) {
      console.error('Failed to fetch logs:', error);
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-orange-500 rounded-2xl p-4 mt-4 shadow-xl text-white">
      <h2 className="text-lg font-bold text-orange-400 mb-2">📜 Strategy & Trade Logs</h2>
      <div className="h-48 overflow-y-auto bg-gray-900 p-2 rounded-md text-sm">
        {logs.length === 0 ? (
          <p className="text-gray-400">No logs yet.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="mb-1 text-white">
              <span className="text-orange-300">[{log.timestamp}]</span> {log.message}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
