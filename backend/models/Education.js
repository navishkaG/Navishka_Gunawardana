import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    title: String,
    institution: String,
    startYear: Number,
    endYear: Number,
}, { timestamps: true });

export default mongoose.model('Education', educationSchema);