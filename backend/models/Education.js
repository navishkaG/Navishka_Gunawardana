import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    startYear: {
        type: Number,
        required: true,
    },
    endYear: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Education', educationSchema);