import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import CV from "../models/CV.js";

// Upload CV
export const uploadCV = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

        // Just delete old DB record
        await CV.deleteMany({});

        // Save new DB record
        const newCV = await CV.create({
            fileName: req.file.filename
        });

        res.status(200).json({
            success: true,
            message: "CV uploaded successfully",
            cv: newCV
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error uploading CV",
            error: error.message
        });
    }
};



// Download CV
export const downloadCV = async (req, res) => {
    try {
        const filePath = path.join(process.cwd(), "uploads/cv/cv.pdf");
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "CV not found"
            });
        }

        res.download(filePath);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error downloading CV",
            error: error.message
        });
    }
};