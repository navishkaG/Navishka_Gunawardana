import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import connectDB from './config/db.js';

// Import Router files
import userRoutes from './routes/userRoute.js';
import personalDataRoutes from './routes/personalDataRoute.js';

// Configure environment
dotenv.config();

// Database config
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/personal-data', personalDataRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE}`.bgCyan.white);
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});