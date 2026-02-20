import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/userController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// User Registration Route
router.post('/register', registerUser);
// User Login Route
router.post('/login', loginUser);
// User Logout Route
router.post('/logout', requireSignIn, logoutUser);

export default router;