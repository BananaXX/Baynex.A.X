// backend/src/routes.ts

import { Express } from 'express';
import logRouter from '../routes/logs';

export function setupRoutes(app: Express) {
  // Root route
  app.get('/', (req, res) => {
    res.send('✅ BAYNEX.A.X Backend is LIVE!');
  });

  // Status check for frontend connection
  app.get('/status', (req, res) => {
    res.json({
      status: 'ok',
      message: '✅ BAYNEX.A.X backend is connected successfully!',
      timestamp: new Date().toISOString()
    });
  });

  // Attach logs route
  app.use('/logs', logRouter);
}
