import React from 'react';

interface LoginPanelProps {
  selectedPlatform: string;
  credentials: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export default function LoginPanel({ selectedPlatform, credentials, onChange }: LoginPanelProps) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mt-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">Platform Credentials</h2>

      {selectedPlatform === 'deriv' && (
        <>
          <label className="block mb-1">Deriv API Token</label>
          <input
            className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-700"
            value={credentials.token || ''}
            onChange={(e) => onChange('token', e.target.value)}
            placeholder="Enter Deriv API Token"
          />
        </>
      )}

      {selectedPlatform === 'iqoption' && (
        <>
          <label className="block mb-1">IQ Option Email</label>
          <input
            className="w-full mb-2 p-2 rounded bg-black text-white border border-gray-700"
            value={credentials.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="Email"
          />
          <label className="block mb-1">IQ Option Password</label>
          <input
            className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-700"
            type="password"
            value={credentials.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            placeholder="Password"
          />
        </>
      )}

      {selectedPlatform === 'mt5' && (
        <>
          <label className="block mb-1">MT5 Server</label>
          <input
            className="w-full mb-2 p-2 rounded bg-black text-white border border-gray-700"
            value={credentials.server || ''}
            onChange={(e) => onChange('server', e.target.value)}
            placeholder="e.g. Deriv-Server"
          />
          <label className="block mb-1">MT5 Login ID</label>
          <input
            className="w-full mb-2 p-2 rounded bg-black text-white border border-gray-700"
            value={credentials.login || ''}
            onChange={(e) => onChange('login', e.target.value)}
            placeholder="Account ID"
          />
          <label className="block mb-1">MT5 Password</label>
          <input
            className="w-full mb-3 p-2 rounded bg-black text-white border border-gray-700"
            type="password"
            value={credentials.password || ''}
            onChange={(e) => onChange('password', e.target.value)}
            placeholder="Password"
          />
        </>
      )}
    </div>
  );
}
