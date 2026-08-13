import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.DATABASE_URL) {
  try {
    prisma = new PrismaClient();
  } catch (err) {
    console.warn("Prisma Client initialization warning:", err.message);
  }
}

// In-Memory Storage Fallback for local demo & seamless execution
export const memoryDb = {
  users: [
    {
      id: "u1",
      name: "Rahul Sharma",
      email: "rahul@college.edu.in",
      passwordHash: "$2a$10$wN9a8n6d8h7d6f5s4a321eO0I1U2Y3T4R5E6W7Q8P9O0", // hashed 'password123'
      role: "STUDENT"
    }
  ],
  studentProfiles: [
    {
      id: "p1",
      userId: "u1",
      experienceLevel: "BEGINNER",
      xp: 350,
      streak: 4,
      totalLessonsCompleted: 3,
      totalChallengesCompleted: 1
    }
  ],
  progress: [
    { id: "pr1", userId: "u1", lessonId: "l-binary-search", status: "COMPLETED", progressPercentage: 100 },
    { id: "pr2", userId: "u1", lessonId: "l-bubble-sort", status: "COMPLETED", progressPercentage: 100 },
    { id: "pr3", userId: "u1", lessonId: "l-stack", status: "COMPLETED", progressPercentage: 100 }
  ],
  userAchievements: [
    { userId: "u1", achievementId: "ach-1", unlockedAt: new Date() },
    { userId: "u1", achievementId: "ach-2", unlockedAt: new Date() }
  ],
  quizAttempts: []
};

export { prisma };
