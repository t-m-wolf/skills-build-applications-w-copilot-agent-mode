import { Router } from 'express';

import { Activity } from '../models/Activity.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const activities = await Activity.find({}, { _id: 0, __v: 0 }).sort({ completedAt: -1 }).lean();
    response.json(activities);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load activities' });
  }
});

export default router;