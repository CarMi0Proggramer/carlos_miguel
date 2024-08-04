import type { APIRoute } from "astro";
import { Resend } from "resend";
import { config } from "dotenv";
config()

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
        console.log(err);
        return new Response(JSON.stringify({ success: false, err }), {
            status: 500,
        });
    }
} 

async function sendEmail(data: SendEmailData) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
        from: `${data.email} <onboarding@resend.dev>`,
        to: process.env.MY_EMAIL as string,
        subject: `Mensaje de ${data.name}`,
        text: data.message,
    });
}
