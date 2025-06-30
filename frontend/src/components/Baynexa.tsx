// frontend/src/components/Baynexa.tsx
import React from 'react';

const Baynexa = ({ message }: { message: string }) => {
  return (
    <div className="fixed bottom-4 left-4 max-w-md p-4 bg-black text-orange-400 border-2 border-orange-500 rounded-2xl shadow-xl">
      <h3 className="text-lg font-bold mb-1">🧠 Baynexa:</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Baynexa;
