import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { fullName, email, phone, subject, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    console.log("Contact form submission:", {
      fullName,
      email,
      phone,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: "Message received successfully" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    )
  }
}
