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



// Get All Skills
export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find().sort({ order: 1 }); // Sort by order ascending

        res.status(200).json({
            success: true,
            count: skills.length,
            skills
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving skills",
            error: error.message
        });
    }
};



// Update Skill
export const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Skill.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Skill updated successfully",
            skill: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating skill",
            error: error.message
        });
    }
};



// Delete Skill
export const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Skill.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Skill not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Skill deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting skill",
            error: error.message
        });
    }
};