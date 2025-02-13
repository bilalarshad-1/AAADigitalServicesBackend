import mongoose from "mongoose";
import { Schema } from "mongoose";

const applySchema = new Schema(
    
    {

    },
    
    {
      timestamps: true     
    }
)

export const Apply = mongoose.model("Apply", applySchema)