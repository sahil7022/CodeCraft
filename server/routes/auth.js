import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma, memoryDb } from '../db/db.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dsa_bina_bakchodi_ke_secret_key_2026';

// Register User
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, experienceLevel = 'BEGINNER' } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    if (prisma) {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already registered.' });
      }

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          passwordHash,
          profile: {
            create: {
              experienceLevel,
              xp: 100, // Welcome bonus
              streak: 1
            }
          }
        },
        include: { profile: true }
      });

      const token = jwt.sign({ userId: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { id: newUser.id, name: newUser.name, email: newUser.email, profile: newUser.profile } });
    } else {
      // Memory fallback
      const existing = memoryDb.users.find(u => u.email === email);
      if (existing) {
        return res.status(400).json({ error: 'Email already registered.' });
      }

      const userId = 'u_' + Date.now();
      const newUser = { id: userId, name, email, passwordHash, role: 'STUDENT' };
      const newProfile = { id: 'p_' + Date.now(), userId, experienceLevel, xp: 100, streak: 1, totalLessonsCompleted: 0, totalChallengesCompleted: 0 };

      memoryDb.users.push(newUser);
      memoryDb.studentProfiles.push(newProfile);

      const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { id: userId, name, email, profile: newProfile } });
    }
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    if (prisma) {
      const user = await prisma.user.findUnique({
        where: { email },
        include: { profile: true }
      });

      if (!user) {
        return res.status(401).json({ error: 'Galat credentials! Account nahi mila.' });
      }

      const isMatch = await bcrypt.compare(password, user.passwordHash);
      if (!isMatch) {
        return res.status(401).json({ error: 'Galat password! Ek baar retry maar.' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { id: user.id, name: user.name, email: user.email, profile: user.profile } });
    } else {
      const user = memoryDb.users.find(u => u.email === email);
      if (!user) {
        return res.status(401).json({ error: 'Galat credentials! Account nahi mila.' });
      }

      const profile = memoryDb.studentProfiles.find(p => p.userId === user.id);
      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user: { id: user.id, name: user.name, email: user.email, profile } });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login.' });
  }
});

// Get Current User Profile
router.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    if (prisma) {
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: { profile: true, progress: true }
      });

      if (!user) return res.status(404).json({ error: 'User not found.' });
      return res.json({ user: { id: user.id, name: user.name, email: user.email, profile: user.profile, progress: user.progress } });
    } else {
      const user = memoryDb.users.find(u => u.id === decoded.userId);
      if (!user) return res.status(404).json({ error: 'User not found.' });
      const profile = memoryDb.studentProfiles.find(p => p.userId === user.id);
      const progress = memoryDb.progress.filter(pr => pr.userId === user.id);
      return res.json({ user: { id: user.id, name: user.name, email: user.email, profile, progress } });
    }
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
});

export default router;
