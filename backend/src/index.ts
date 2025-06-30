import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { setupRoutes } from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Setup custom routes
setupRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[BAYNEX BACKEND] Running on port ${PORT}`);
});
