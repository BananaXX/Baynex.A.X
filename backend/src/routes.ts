// backend/src/routes.ts
import { Express } from 'express';
import logsRouter from './routes/logs';

export function setupRoutes(app: Express) {
  app.get('/', (req, res) => {
    res.send('✅ BAYNEX.A.X Backend is LIVE!');
  });

  app.use('/logs', logsRouter);

  // Add this:
  app.get('/status', (req, res) => {
    res.json({ ok: true, message: 'Backend status confirmed' });
  });

  app.get('/goal', (req, res) => {
    res.json({ goal: 10, deadline: '2h' }); // placeholder for now
  });
}
