import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js"; // Adjust the path as necessary
import contactRouter from './routes/contact.router.js'; // Ensure this path is correct

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/contact", contactRouter);

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 7000, () => {
            console.log(`Server is running on PORT No: ${process.env.PORT || 7000}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });