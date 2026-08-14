import mongoose from 'mongoose';

import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    externalId: 'u1',
    name: 'Mona Octocat',
    email: 'mona@octofit.example',
    teamId: 't1',
    fitnessGoal: 'Build trail-running endurance',
    level: 'intermediate',
  },
  {
    externalId: 'u2',
    name: 'Hubot Prime',
    email: 'hubot@octofit.example',
    teamId: 't2',
    fitnessGoal: 'Improve cycling power',
    level: 'advanced',
  },
  {
    externalId: 'u3',
    name: 'Avery Branch',
    email: 'avery@octofit.example',
    teamId: 't1',
    fitnessGoal: 'Create a consistent strength routine',
    level: 'beginner',
  },
];

const teams = [
  {
    externalId: 't1',
    name: 'Octo Hikers',
    city: 'San Francisco',
    coach: 'Riley Summit',
    members: ['u1', 'u3'],
  },
  {
    externalId: 't2',
    name: 'Trail Blazers',
    city: 'Seattle',
    coach: 'Jordan Pace',
    members: ['u2'],
  },
];

const activities = [
  {
    externalId: 'a1',
    userId: 'u1',
    teamId: 't1',
    type: 'run',
    durationMinutes: 35,
    calories: 320,
    completedAt: new Date('2026-08-10T14:30:00.000Z'),
  },
  {
    externalId: 'a2',
    userId: 'u2',
    teamId: 't2',
    type: 'cycle',
    durationMinutes: 50,
    calories: 470,
    completedAt: new Date('2026-08-11T13:00:00.000Z'),
  },
  {
    externalId: 'a3',
    userId: 'u3',
    teamId: 't1',
    type: 'strength',
    durationMinutes: 28,
    calories: 210,
    completedAt: new Date('2026-08-12T16:15:00.000Z'),
  },
];

const leaderboard = [
  {
    externalId: 'l1',
    userId: 'u2',
    teamId: 't2',
    rank: 1,
    points: 1880,
    totalActivities: 18,
  },
  {
    externalId: 'l2',
    userId: 'u1',
    teamId: 't1',
    rank: 2,
    points: 1420,
    totalActivities: 14,
  },
  {
    externalId: 'l3',
    userId: 'u3',
    teamId: 't1',
    rank: 3,
    points: 960,
    totalActivities: 10,
  },
];

const workouts = [
  {
    externalId: 'w1',
    name: 'Foundation Strength',
    focus: 'strength',
    difficulty: 'beginner',
    durationMinutes: 30,
    description: 'Bodyweight squats, pushups, rows, and core work for balanced strength.',
  },
  {
    externalId: 'w2',
    name: 'Endurance Builder',
    focus: 'cardio',
    difficulty: 'intermediate',
    durationMinutes: 45,
    description: 'Steady-state cardio with short tempo intervals to build aerobic capacity.',
  },
  {
    externalId: 'w3',
    name: 'Trail Mobility Reset',
    focus: 'mobility',
    difficulty: 'beginner',
    durationMinutes: 20,
    description: 'Hip, ankle, and thoracic mobility for recovery after runs and hikes.',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
