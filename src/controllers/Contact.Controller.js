import { asyncHandler } from '../utlis/asyncHandler.js';
import { ApiResponse } from '../utlis/ApiResponse.js';
import { ApiError } from '../utlis/ApiErrors.js';
import { Contact } from '../modles/contact.model.js';
import { sendContactEmail } from '../utlis/sendContactEmail.js'; 

// POST: Create a new contact message
const createContactMessage = asyncHandler(async (req, res) => {
    const { companyName, interestedIn, name, phoneNumber, email, designation, budget, heardAboutUs } = req.body;

    // Validate required fields
    if (!companyName || !interestedIn || !name || !phoneNumber || !email || !designation || !budget || !heardAboutUs) {
        throw new ApiError(400, "All fields are required");
    }

    // Create a new contact message
    const contactMessage = await Contact.create({
        companyName,
        interestedIn,
        name,
        phoneNumber,
        email,
        designation,
        budget,
        heardAboutUs
    });

    // Send confirmation email to the user
    await sendContactEmail(name, email);

    return res.status(201).json(new ApiResponse(201, contactMessage, "Contact message created successfully"));
});

// GET: Retrieve all contact messages
const getContactMessages = asyncHandler(async (req, res) => {
    const contactMessages = await Contact.find().sort({ createdAt: -1 }); // Sort by creation date

    return res.status(200).json(new ApiResponse(200, contactMessages, "Contact messages retrieved successfully"));
});

export {
    createContactMessage,
    getContactMessages
};