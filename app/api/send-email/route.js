import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, service, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can verify your own domain later
      to: 'mudeeshatharindudilshan@gmail.com',
      subject: `New Contact Request from ${firstname} ${lastname}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Full Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
