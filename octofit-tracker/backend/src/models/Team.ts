import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    externalId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    coach: { type: String, required: true },
    members: [{ type: String, required: true }],
  },
  { timestamps: true },
);

export const Team = model('Team', teamSchema);