import { Router } from 'express';

import { User } from '../models/User.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const users = await User.find({}, { _id: 0, __v: 0 }).sort({ name: 1 }).lean();
    response.json(users);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load users' });
  }
});

export default router;