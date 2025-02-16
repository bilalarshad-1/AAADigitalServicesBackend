import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("MONGODB_URL:", process.env.MONGODB_URL); // Log the URL to check if it's loaded
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB is connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error:", error);
        throw error; // Rethrow the error to be caught in the main file
    }
};

export default connectDB;