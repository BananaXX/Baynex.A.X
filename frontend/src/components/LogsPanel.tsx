import React, { useEffect, useState } from 'react';
import { getLogs } from '../api/logs';

interface LogEntry {
  timestamp: string;
  type: string;
  message: string;
}

interface Props {
  platform: string;
}

const LogsPanel: React.FC<Props> = ({ platform }) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const result = await getLogs(platform);
        setLogs(result.reverse()); // show latest first
      } catch (err) {
        console.error('Failed to fetch logs:', err);
      }
    };
    fetchLogs();
    const interval = setInterval(fetchLogs, 8000);
    return () => clearInterval(interval);
  }, [platform]);

  return (
    <div className="bg-black text-white p-4 rounded-2xl shadow-md max-h-96 overflow-y-auto">
      <h2 className="text-lg font-bold mb-2">📜 Activity Logs</h2>
      <ul className="text-sm space-y-1">
        {logs.map((log, index) => (
          <li key={index} className="border-b border-gray-700 pb-1">
            <span className="text-gray-400 mr-2">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
            <span className="text-orange-400 font-semibold mr-1">{log.type.toUpperCase()}:</span>
            <span>{log.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsPanel;
