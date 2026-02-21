import mongoose from "mongoose";
import Project from "../models/Project.js";

// Create project
export const createProject = async (req, res) => {
    try {
        const { title, description, tools } = req.body;

        if (!title || !description || !tools) {
            return res.status(400).json({ 
                success: false,
                message: "Please provide all required fields" });
        }

        if (!Array.isArray(tools)) {
            return res.status(400).json({ 
                success: false,
                message: "Tools should be an array of strings" });
        }

        const project = await Project.create(req.body);

        res.status(201).json({
            success: true,
            message: "Project created successfully",
            project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating project",
            error: error.message,
        });
    }
};



// Get all projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: projects.length,
            projects,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching projects",
            error: error.message,
        });
    }
};



// Get featured projects
export const getFeaturedProjects = async (req, res) => {
    try {
        const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: projects.length,
            projects,
        });        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching featured projects",
            error: error.message,
        });
    }
};



// Update project
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Project.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully",
            project: updated,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating project",
            error: error.message,
        });
    }
}