import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    description: {
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

export default mongoose.model("Experience", experienceSchema);