import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstname, lastname, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${firstname} ${lastname} <onboarding@resend.dev>`,
      to: ["utkarsh.dubey.ug23@nsut.ac.in"], // <-- your email here
      subject: `Contact Form Submission from ${firstname} ${lastname}`,
      react: EmailTemplate({
        firstName:firstname,
        LastName : lastname,
        message,
        email,
      }) as React.ReactElement,
      // or use `html` if you don't have a React template
      // html: `<p>${message}</p><p>From: ${firstname} ${lastname} (${email})</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
