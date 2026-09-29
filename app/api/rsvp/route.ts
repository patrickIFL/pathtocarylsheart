import { NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL!;

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        attendance: payload.attendance,
        guests: payload.guests,
        message: payload.message,
      }),
      cache: "no-store",
    });

    const text = await response.text();

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      result = {
        success: false,
        error: text,
      };
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "Failed to submit RSVP.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      responseId: result.responseId,
    });
  } catch (error) {
    console.error("RSVP API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit RSVP.",
      },
      { status: 500 },
    );
  }
}
