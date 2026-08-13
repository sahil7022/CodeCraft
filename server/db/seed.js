import { PrismaClient } from '@prisma/client';
import { SEED_CONCEPTS, SEED_LESSONS, SEED_QUIZZES, SEED_ACHIEVEMENTS } from './seedData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Render PostgreSQL database with DSA Bina Bakchodi Ke content...');

  // Seed Concepts
  for (const concept of SEED_CONCEPTS) {
    await prisma.concept.upsert({
      where: { slug: concept.slug },
      update: concept,
      create: concept
    });
  }
  console.log('✅ Concepts seeded.');

  // Seed Lessons
  for (const lesson of SEED_LESSONS) {
    await prisma.lesson.upsert({
      where: { slug: lesson.slug },
      update: lesson,
      create: lesson
    });
  }
  console.log('✅ Lessons seeded.');

  // Seed Quizzes
  for (const quiz of SEED_QUIZZES) {
    await prisma.quiz.upsert({
      where: { id: quiz.id },
      update: quiz,
      create: quiz
    });
  }
  console.log('✅ Quizzes seeded.');

  // Seed Achievements
  for (const ach of SEED_ACHIEVEMENTS) {
    await prisma.achievement.upsert({
      where: { id: ach.id },
      update: ach,
      create: ach
    });
  }
  console.log('✅ Achievements seeded.');

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
