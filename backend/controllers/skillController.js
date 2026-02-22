import mongoose from "mongoose";
import Skill from "../models/Skill.js";

// Create Skill
export const createSkill = async (req, res) => {
    try {
        const { title, tools } = req.body;

        if (!title || !tools) {
            return res.status(400).json({ 
                success: false,
                message: "Title and tools are required" 
            });
        }

        if (!Array.isArray(tools)) {
            return res.status(400).json({
                success: false,
                message: "Tools must be an array of strings"
            });
        }

        const skill = await Skill.create(req.body);

        res.status(201).json({
            success: true,
            message: "Skill created successfully",
            skill
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating skill",
            error: error.message
        });
    }
};