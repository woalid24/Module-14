import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const reqBody = await req.json();
  let ToEmail = reqBody;

  const transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  let myEmail = {
    from: "E-Learning <info@teamrabbil.com>",
    to: ToEmail,
    subject: "Wellcome to E-Learning ",
    text: "We're happy you're here. Let's get your email veried Code Is 1234 ",
  };

  try {
    let mailResult = await transporter.sendMail(myEmail);
    return NextResponse.json(
      { message: mailResult },
      {
        status: 200,
        headers: {
          "Set-Cookie": `email=${ToEmail}; Max-Age=7200; Secure; Path=/; SameSite=Strict`,
        },
      }
    );
  } catch (e) {
    return NextResponse.json({ message: "Fail" });
  }
}
