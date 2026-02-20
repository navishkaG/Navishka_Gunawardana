import mongoose from "mongoose";
import PersonalData from "../models/personalData.js";

// Create or Update Personal Data (Single Document Logic)
export const createOrUpdatePersonalData = async (req, res) => {
    try {
        const existing = await PersonalData.findOne();

        if (existing) {
            // Update existing document
            const updated = await PersonalData.findByIdAndUpdate(
                existing._id,
                req.body,
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: "Personal data updated successfully.",
                data: updated
            });
        }

        // If not exist --> Create first time
        const created = await PersonalData.create(req.body);

        res.status(201).json({
            success: true,
            message: "Personal data created successfully.",
            data: created
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating/updating personal data.",
            error: error.message
        });
    }
};



// Get Personal Data
export const getPersonalData = async (req, res) => {
    try {
        const personal = await PersonalData.findOne();

        if (!personal) {
            return res.status(404).json({
                success: false,
                message: "Personal data not found."
            });
        }

        res.status(200).json({
            success: true,
            data: personal
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching personal data.",
            error: error.message
        });
    }
};