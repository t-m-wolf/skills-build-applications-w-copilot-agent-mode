import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    teamId: { type: String, required: true },
    rank: { type: Number, required: true },
    points: { type: Number, required: true },
    totalActivities: { type: Number, required: true },
  },
  { collection: 'leaderboard', timestamps: true },
);

export const LeaderboardEntry = model('LeaderboardEntry', leaderboardEntrySchema);