// backend/src/routes.ts

import { Express } from 'express';

export function setupRoutes(app: Express) {
  app.get('/', (req, res) => {
    res.send('✅ BAYNEX.A.X Backend is LIVE!');
  });

  // Add more routes here later
}
