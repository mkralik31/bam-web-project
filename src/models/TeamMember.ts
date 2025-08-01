import mongoose from 'mongoose';

export interface ITeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  order: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const teamMemberSchema = new mongoose.Schema<ITeamMember>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  linkedin: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  order: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Index pre zoradenie
teamMemberSchema.index({ order: 1, active: 1 });

export default mongoose.models.TeamMember || mongoose.model<ITeamMember>('TeamMember', teamMemberSchema); 