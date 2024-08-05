import type { APIRoute } from "astro";
import { Resend } from "resend";
import { config } from "dotenv";
config();

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        await sendEmail({
            name: data.get("name") as string,
            email: data.get("email") as string,
            message: data.get("message") as string,
        })
        
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ success: false, err: JSON.parse(error.message) }), {
            status: 500,
        });
    }
} 

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(data: SendEmailData) {
    const result = await resend.emails.send({
        from: `${data.email} <onboarding@resend.dev>`,
        to: process.env.MY_EMAIL as string,
        subject: `Mensaje de ${data.name}`,
        text: data.message,
    });

    if (!result.data) {
        throw new Error(JSON.stringify(result.error));
    }
}
