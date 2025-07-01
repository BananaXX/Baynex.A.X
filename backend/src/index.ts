import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { setupRoutes } from './routes';

dotenv.config();

const app = express();

// ✅ Enable CORS for the frontend domain
app.use(cors({
  origin: 'https://baynex-a-x-ways.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// ✅ Setup all defined routes
setupRoutes(app);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[BAYNEX BACKEND] Running on port ${PORT}`);
});
