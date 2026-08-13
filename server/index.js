import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'DSA Bina Bakchodi Ke 😎 API Server',
    database: process.env.DATABASE_URL ? 'PostgreSQL Configured' : 'In-Memory Mode Ready'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DSA Bina Bakchodi Ke Server running on port ${PORT}`);
});
