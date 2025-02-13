import { asyncHandler } from "../utlis/asyncHandler";
import { ApiError } from "../utlis/ApiErrors";
import { User } from "../modles/user.model";
import { uploadOnCloudinary } from "../utlis/cloudinary";
import mongoose from "mongoose";
import { ApiResponce } from "../utlis/ApiResponse";
import jwt from "jsonwebtoken";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}
