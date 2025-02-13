import mongoose from "mongoose";
import { Schema } from "mongoose";

const reviewSchema = new Schema(
    {   name: {
         type: String,
         required: true
    },
        projectName: { 
            type: String, 
            required: true 
        },
        comment: { 
            type: String, 
            required: true 
        },
        starRating: { 
            type: Number, 
            required: true 
        },
    },
    
    {
      timestamps:true
    }

) 

export const Review = mongoose.model("Review", reviewSchema)