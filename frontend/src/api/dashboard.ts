// frontend/src/api/dashboard.ts

export const getDashboardData = async () => {
  // This is a mock/dummy response for now.
  // You can replace it with a real fetch later (e.g., from backend API).

  return {
    profit: 420.69,
    winRate: 91,
    activeTrades: [
      { id: 'T-1001', asset: 'Volatility 100', pnl: 12 },
      { id: 'T-1002', asset: 'EUR/USD', pnl: -2 },
    ],
    strategyStats: {
      momentum: { winRate: 65, trades: 40 },
      reversal: { winRate: 72, trades: 33 },
      swing: { winRate: 58, trades: 25 },
    },
    goal: {
      profitTarget: 1000,
      deadline: '2025-06-30T23:59:59Z',
    },
  };
};
