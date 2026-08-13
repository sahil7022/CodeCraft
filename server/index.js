import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serve static React frontend files from dist directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Catch-all SPA fallback routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 DSA Bina Bakchodi Ke Server running on port ${PORT}`);
});
