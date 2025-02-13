import mongoose from "mongoose";
import { Schema } from "mongoose";

const applySchema = new Schema(
    
    {
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    applyingfor: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    positionlevel: {
        type: String,
        required: true
    },
    joiningavailability: {
        type: String,
        required: true
    },
    jobtype: {
        type: String,
        required: true
    },
    cv: {

    },
    linkedinprofile: {
        type: String,
        required: true
    },
    currentcompany: {
        type: String,
        required: true
    },
    graduatedfrom: {
        type: String,
        required: true
    },
    currentsalary: {
        type: Number,
        required: true
    },
    expectedsalary: {
        type: Number,
        required: true
    },



    },
    
    {
      timestamps: true     
    }
)

export const Apply = mongoose.model("Apply", applySchema)