import { Router } from 'express';

import { LeaderboardEntry } from '../models/LeaderboardEntry.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}, { _id: 0, __v: 0 }).sort({ rank: 1 }).lean();
    response.json(leaderboard);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load leaderboard' });
  }
});

export default router;