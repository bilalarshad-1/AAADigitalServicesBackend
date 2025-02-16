// sendContactEmail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

export const sendContactEmail = async (name, email) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Contact Us Confirmation',
        text: `
Dear ${name},

Thank you for reaching out to us at AAA Digital Services!\n
We are pleased to inform you that we have received your message. 
\nOur team is currently reviewing your inquiry, and we will get back to you as soon as possible.
 \n Your feedback is important to us, and we strive to provide the best service to our clients.
 \nIf you have any urgent questions or need immediate assistance, please feel free to contact us directly at support@aaadigitalservices.com or call us at (123) 456-7890.\n
Thank you once again for your message. We look forward to assisting you!\n
Best regards,\n
AAA Digital Services\n
Website: www.aaadigitalservices.com\n
Phone: (123) 456-7890\n
Email: support@aaadigitalservices.com
        `,
    };

    // Send the email using your email service (e.g., Nodemailer)
    // await transporter.sendMail(mailOptions);

    await transporter.sendMail(mailOptions);
};