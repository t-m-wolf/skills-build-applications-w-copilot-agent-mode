import { Router } from 'express';

import { Team } from '../models/Team.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const teams = await Team.find({}, { _id: 0, __v: 0 }).sort({ name: 1 }).lean();
    response.json(teams);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load teams' });
  }
});

export default router;