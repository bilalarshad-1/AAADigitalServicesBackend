import express from 'express';
import { createContactMessage, getContactMessages } from '../controllers/Contact.Controller.js';

const router = express.Router();

// Route to create a new contact message
router.post('/', createContactMessage);

// Route to get all contact messages
router.get('/', getContactMessages);

export default router;