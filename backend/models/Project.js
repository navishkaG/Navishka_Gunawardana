import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    },
    githubLink: {
        type: String,
        default: "",
    },
    liveLink: {
        type: String,
        default: "",
    },
    featured: {
        type: Boolean,
        default: false,
    }, // Featured --> Highlight best works (Eg: Show featured projects on homepage)
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);