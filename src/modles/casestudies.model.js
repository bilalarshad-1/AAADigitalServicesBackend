import mongoose from "mongoose";
import { Schema } from "mongoose";

const casestudiesSchema = new Schema(
    {
      

    },


    {
      timestamps: true
    }

)


export const Casestudies = mongoose.model("Casestudies", casestudiesSchema)