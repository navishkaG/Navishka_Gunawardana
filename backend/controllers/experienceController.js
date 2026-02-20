import mongoose from "mongoose";
import Experience from "../models/Experience.js";

// Create experience
export const createExperience = async (req, res) => {
    try {
        const { position, company, description, startYear, endYear } = req.body;

        if (!position || !company || !description || !startYear || !endYear) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required" 
            });
        }

        if (startYear > endYear) {
            return res.status(400).json({ 
                success: false,
                message: "Start year cannot be greater than end year" 
            });
        }

        const experience = await Experience.create(req.body);

        res.status(201).json({
            success: true,
            message: "Experience added successfully",
            data: experience,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating experience",
            error: error.message,
        });
    }
};



// Get all experience entries
export const getExperiences = async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ endYear: -1, startYear: -1 });

        res.status(200).json({
            success: true,
            count: experiences.length,
            data: experiences,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving experiences",
            error: error.message,
        });
    }
};