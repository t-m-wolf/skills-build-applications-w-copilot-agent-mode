import { Router } from 'express';

import { Workout } from '../models/Workout.js';

const router = Router();

router.get('/', async (_request, response) => {
  try {
    const workouts = await Workout.find({}, { _id: 0, __v: 0 }).sort({ name: 1 }).lean();
    response.json(workouts);
  } catch (error) {
    response.status(500).json({ error: 'Failed to load workouts' });
  }
});

export default router;