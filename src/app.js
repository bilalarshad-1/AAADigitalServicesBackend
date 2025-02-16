import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(express.json());

//import the routes
import contactRouter from './routes/contact.router.js'; // Ensure this path is correct

//Declare the routes+9*

app.use("/api/v1/contact", contactRouter)

 export { app }