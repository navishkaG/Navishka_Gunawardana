import mongoose from "mongoose";

const aboutCardSchema = new mongoose.Schema({
    title: String,
    details: String
});

const personalSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    position: String,
    heroDescription: String,
    aboutDescription: String,

    aboutCards: [aboutCardSchema],

    email: String,
    phone1: String,
    phone2: String,
    address: String,

    github: String,
    linkedin: String,
    facebook: String,
}, { timestamps: true });

export default mongoose.model('PersonalData', personalSchema);