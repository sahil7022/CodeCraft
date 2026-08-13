import express from 'express';
import { SEED_CONCEPTS, SEED_LESSONS, SEED_QUIZZES, SEED_ACHIEVEMENTS } from '../db/seedData.js';
import { prisma, memoryDb } from '../db/db.js';

const router = express.Router();

// Get All Concepts & Roadmap
router.get('/concepts', async (req, res) => {
  try {
    if (prisma) {
      const concepts = await prisma.concept.findMany({
        include: { lessons: true },
        orderBy: { orderIndex: 'asc' }
      });
      if (concepts.length > 0) return res.json(concepts);
    }
    // Seed fallback
    const concepts = SEED_CONCEPTS.map(c => ({
      ...c,
      lessons: SEED_LESSONS.filter(l => l.conceptId === c.id)
    }));
    res.json(concepts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch concepts' });
  }
});

// Get Lesson by Slug
router.get('/lessons/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (prisma) {
      const lesson = await prisma.lesson.findUnique({
        where: { slug },
        include: { quizzes: true, concept: true }
      });
      if (lesson) return res.json(lesson);
    }
    
    const lesson = SEED_LESSONS.find(l => l.slug === slug);
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
    
    const quizzes = SEED_QUIZZES.filter(q => q.lessonId === lesson.id);
    const concept = SEED_CONCEPTS.find(c => c.id === lesson.conceptId);

    res.json({ ...lesson, quizzes, concept });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lesson' });
  }
});

// Get All Achievements
router.get('/achievements', async (req, res) => {
  try {
    if (prisma) {
      const achievements = await prisma.achievement.findMany();
      if (achievements.length > 0) return res.json(achievements);
    }
    res.json(SEED_ACHIEVEMENTS);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch achievements' });
  }
});

// Update Lesson Progress / Complete Lesson
router.post('/progress', async (req, res) => {
  try {
    const { userId, lessonId, status = 'COMPLETED', progressPercentage = 100 } = req.body;

    if (!userId || !lessonId) {
      return res.status(400).json({ error: 'userId and lessonId are required.' });
    }

    if (prisma) {
      const progress = await prisma.progress.upsert({
        where: { userId_lessonId: { userId, lessonId } },
        update: { status, progressPercentage, completedAt: new Date() },
        create: { userId, lessonId, status, progressPercentage, completedAt: new Date() }
      });

      // Update user XP
      await prisma.studentProfile.update({
        where: { userId },
        data: {
          xp: { increment: 50 },
          totalLessonsCompleted: { increment: 1 }
        }
      });

      return res.json({ success: true, progress, xpGained: 50 });
    } else {
      let prog = memoryDb.progress.find(p => p.userId === userId && p.lessonId === lessonId);
      if (prog) {
        prog.status = status;
        prog.progressPercentage = progressPercentage;
      } else {
        prog = { id: 'pr_' + Date.now(), userId, lessonId, status, progressPercentage };
        memoryDb.progress.push(prog);
      }

      let profile = memoryDb.studentProfiles.find(p => p.userId === userId);
      if (profile) {
        profile.xp += 50;
        profile.totalLessonsCompleted += 1;
      }

      return res.json({ success: true, progress: prog, xpGained: 50, currentXp: profile ? profile.xp : 400 });
    }
  } catch (err) {
    console.error("Progress update error:", err);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

export default router;
