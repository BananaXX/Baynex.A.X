import React from 'react';

interface BaynexaBubbleProps {
  message: string;
}

export default function BaynexaBubble({ message }: BaynexaBubbleProps) {
  return (
    <div className="max-w-lg bg-gradient-to-br from-red-600 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-md animate-pulse">
      <p className="text-sm font-medium">Baynexa says:</p>
      <p className="text-base font-semibold">{message}</p>
    </div>
  );
}
