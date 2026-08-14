import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    teamId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    calories: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Activity = model('Activity', activitySchema);