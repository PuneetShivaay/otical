
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Received request to send email:", { email, subject, message });

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['oticalmail@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message submitted from {email}:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message });
  }
}
