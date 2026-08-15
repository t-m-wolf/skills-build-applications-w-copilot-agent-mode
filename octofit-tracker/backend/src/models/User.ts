import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
    level: { type: String, required: true },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);