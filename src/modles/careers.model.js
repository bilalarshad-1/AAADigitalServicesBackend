import mongoose, { Types } from "mongoose";
import { Schema } from "mongoose";

const careersSchema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        postionavaialable:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        responsibilities: {
            type: String,
            required: true
        },
        skills: {
            type: String,
            required: true
        }
    },
    
    {
    timestamps: true
    }
)


export const Careers = mongoose.model("Careers", careersSchema)