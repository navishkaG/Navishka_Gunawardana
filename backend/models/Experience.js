import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    position: String,
    company: String,
    description: String,
    startYear: Number,
    endYear: Number,
}, { timestamps: true });

export default mongoose.model("Experience", experienceSchema);