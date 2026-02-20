import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { isStrongPassword } from "../helpers/validator.js";
import fs from 'fs';
import path from 'path';
import User from "../models/User.js";

// Register
export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required."
            });
        }

        // Validate password strength
        if (!isStrongPassword(password)) {
            return res.status(400).json({
                success: false,
                message: "Password is not strong enough."
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already registered."
            });
        }

        const hashed = await hashPassword(password);

        // 1) Generate token (raw) + store hash
        const rawToken = crypto.randomBytes(32).toString("hex");
        const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");

        const user = await User.create({
            email,
            password: hashed,
            emailVerifyTokenHash: hashedToken,
            passwordResetExpires: Date.now() + 10 * 60 * 1000 // 10 minutes
        })

        return res.status(201).json({
            success: true,
            message: "User registered successfully. Please check your email to verify your account."
        });
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}



// Login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({
            success: true,
            message: "Logged in successfully.",
            userId: user._id,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });;
    }
};



// Logout
export const logoutUser = async (req, res) => {
    try {
        res.clearCookie('access_token').status(200).json({
            success: true,
            message: "Logged out successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });;
    }
};