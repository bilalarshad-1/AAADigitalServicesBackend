import mongoose from "mongoose";
import { Schema } from "mongoose";

const contactSchema = new Schema( 
    {

        companyName: {
             type: String, 
             required: true 
            },
        interestedIn: {
             type: String,
             required: true 
            },
        name: {
             type: String,
             required: true
             },
        phoneNumber: {
             type: String,
             required: true
             },
        email: {
             type: String,
              required: true 
            },
        designation: {
             type: String,
             required: true 
            },
        budget: { type: String, required: true },
        heardAboutUs: { type: String, required: true },
       

    },



    { 
        
        timestamps: true 
    
    }


);


export const Contact = mongoose.model("Contact", contactSchema);
