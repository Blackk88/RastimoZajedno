import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  if (
    data.name === "" ||
    data.name.trim === "" ||
    !data.email.includes("@") ||
    data.message.trim === "" ||
    data.message === ""
  ) {
    return NextResponse.json({ message: "Invalid input" }, { status: 422 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: {
      name: data.name,
      address: process.env.EMAIL_SENDER ?? "",
    },
    replyTo: data.email,
    to: process.env.EMAIL_RECIPIENT,
    subject: data.subject ?? "No Subject",
    html: `
    <i>Message from Rastimo Zajedno Website</i>
    <h4>Message from: ${data.name} Email: ${data.email}</h4>
    <h4>${data.message}</h4>
    `,
  };

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: "Your message was sent" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 }
    );
  }
}
