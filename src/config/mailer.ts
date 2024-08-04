import nodemailer from 'nodemailer';
import { config } from "dotenv";
config()

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASS
    }
})

transporter.verify()
.then(() => console.log("Ready to send emails"))
.catch(() => console.log("You can't send emails"))