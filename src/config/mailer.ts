import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY
    }
});

transporter.verify()
    .then(() => console.log("Ready to send emails"))
    .catch(err => console.log(err))