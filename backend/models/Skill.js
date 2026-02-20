import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    title: String,
    tools: [String],
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);