import type { APIRoute } from "astro";
import { transporter } from "../../config/mailer";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        await sendEmail({
            name: data.get("name") as string,
            email: data.get("email") as string,
            message: data.get("message") as string,
        })
        
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, err }), {
            status: 500,
        });
    }
} 

async function sendEmail(data: SendEmailData) {
    await transporter.sendMail({
        from: data.email,
        to: process.env.MY_EMAIL,
        subject: `Mensaje de ${data.name}`,
        text: data.message,
    });
}
