// frontend/src/App.tsx
import React from 'react';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-3xl font-bold text-orange-400">BAYNEX.A.X Dashboard</h1>
      <p className="text-xs italic text-right">God the creator of heaven and Earth is my provider. ISAIAH:35;1-10</p>
      <Dashboard />
      <footer className="mt-12 text-center text-xs text-orange-600">
        Built with guidance from AI using ChatGPT
      </footer>
    </div>
  );
};

export default App;
