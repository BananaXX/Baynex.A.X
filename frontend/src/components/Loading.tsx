import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-red-400">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-opacity-50"></div>
      <p className="mt-4 text-red-500">Baynexa is preparing your dashboard...</p>
    </div>
  );
}
