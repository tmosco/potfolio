import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

const recipientEmail =
  process.env.CONTACT_TO_EMAIL ?? "tayotomioyeniyi@gmail.com";
const senderEmail = process.env.CONTACT_FROM_EMAIL;
const resendApiKey = process.env.RESEND_API_KEY;

const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const company = body.company?.trim() ?? "";

  if (company) {
    return NextResponse.json({ message: "Spam detected." }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!resendApiKey || !senderEmail) {
    return NextResponse.json(
      {
        message:
          "Contact email is not configured yet. Please email me directly at tayotomioyeniyi@gmail.com.",
      },
      { status: 503 }
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: senderEmail,
      to: [recipientEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!emailResponse.ok) {
    return NextResponse.json(
      {
        message:
          "Message sending failed. Please try again or email me directly at tayotomioyeniyi@gmail.com.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Message sent successfully.",
  });
}
