import React from 'react';

interface LogEntry {
  time: string;
  message: string;
  type?: 'info' | 'success' | 'error' | 'warning';
}

interface LogPanelProps {
  logs: LogEntry[];
}

const typeColors = {
  info: 'text-blue-400',
  success: 'text-green-400',
  error: 'text-red-400',
  warning: 'text-yellow-400',
};

export default function LogPanel({ logs }: LogPanelProps) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl p-4 mt-4 h-64 overflow-y-auto">
      <h3 className="text-lg font-bold text-white mb-2">📜 Baynex Logs</h3>
      <ul className="space-y-1 text-sm">
        {logs.map((log, i) => (
          <li key={i} className={`whitespace-pre-wrap ${typeColors[log.type || 'info']}`}>
            <span className="text-gray-400 mr-2">[{log.time}]</span> {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
