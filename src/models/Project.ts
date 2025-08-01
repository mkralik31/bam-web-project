import mongoose from 'mongoose';

export interface IProject {
  _id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  images: string[];
  featuredImage: string;
  category: string;
  technologies: string[];
  client?: string;
  date: Date;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new mongoose.Schema<IProject>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  featuredImage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'design', 'branding', 'other'],
  },
  technologies: [{
    type: String,
    trim: true,
  }],
  client: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Index pre rýchle vyhľadávanie
projectSchema.index({ slug: 1 });
projectSchema.index({ featured: 1 });
projectSchema.index({ category: 1 });

export default mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema); 