import express from 'express';
import { uploadCV, downloadCV } from '../controllers/cvController.js';
import { uploadCVFile } from '../middlewares/uploadMiddleware.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Upload CV Route
router.post("/", requireSignIn, uploadCVFile.single("cv"), uploadCV);
// Download CV Route
router.get("/", downloadCV);

export default router;