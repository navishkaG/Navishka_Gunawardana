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