import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default mongoose.model('CV', cvSchema);