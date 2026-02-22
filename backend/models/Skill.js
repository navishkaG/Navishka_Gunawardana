import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    },
    order: {
        type: Number,
        default: 0,
    } // Instead of relying on created date, I control display order manually
}, { timestamps: true });

export default mongoose.model('Skill', skillSchema);