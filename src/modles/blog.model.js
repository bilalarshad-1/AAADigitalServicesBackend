import mongoose from "mongoose";
import { Schema } from "mongoose";

const blogSchema = new Schema(
    {

        name: {
            type: String,
            required: true
          },
          category: {
            type: String,
            required: true
          },
          introduction: {
            type: String,
            required: true
          },
          description1: {
            type: String,
            required: true
          },
          description2: {
            type: String,
            
          },
          description3: {
            type: String,
            
          },
          description4: {
            type: String,
           
          },
          description5: {
            type: String,
          
          },
          conclusion: {
            type: String,
            
          }
        
    },
    
    {
    timestamps: true
    }   
);


export const Blog = mongoose.model("Blog", blogSchema);