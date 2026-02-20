import mongoose from "mongoose";
import Education from "../models/Education.js";

// Create Education
export const createEducation = async (req, res) => {
    try {
        const { title, institution, startYear, endYear } = req.body;

        if (!title || !institution || !startYear || !endYear) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        const education = await Education.create(req.body);

        res.status(201).json({
            success: true,
            message: "Education added successfully.",
            data: education
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating education entry.",
            error: error.message
        });
    }
};



// Get All Education Entries
export const getEducations = async (req, res) => {
    try {
        const educations = await Education.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: educations.length,
            data: educations
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching education entries.",
            error: error.message
        });
    }
};