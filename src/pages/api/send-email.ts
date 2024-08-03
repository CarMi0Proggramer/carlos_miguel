import { transporter } from "../../config/mailer";

export async function sendEmail(data: SendEmailData) {
    let mailOptions = {
        from: data.email,
        to: process.env.MY_EMAIL,
        subject: `Mensaje de ${data.name}`,
        text: data.message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
        });
    }
}
