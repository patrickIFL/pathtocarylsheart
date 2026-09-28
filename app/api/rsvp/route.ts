import { NextRequest, NextResponse } from "next/server";

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const values = {
      name: String(body.name ?? "").trim(),
      email: String(body.email ?? "").trim(),
      attendance: String(body.attendance ?? "").trim(),
      guests: String(body.guests ?? "").trim(),
      message: String(body.message ?? "").trim(),
    };

    if (!values.name || !values.email || !values.attendance || !values.guests) {
      return NextResponse.json(
        { error: "Missing required RSVP fields." },
        { status: 400 },
      );
    }

    if (!GOOGLE_APPS_SCRIPT_URL) {
      return NextResponse.json(
        {
          error:
            "Google Apps Script endpoint is not configured. Set GOOGLE_APPS_SCRIPT_URL in your environment.",
        },
        { status: 500 },
      );
    }

    const scriptResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        submittedAt: new Date().toISOString(),
      }),
    });

    const responseText = await scriptResponse.text();

    console.log("Google Apps Script HTTP status:", scriptResponse.status);
    console.log("Google Apps Script response:", responseText);

    if (!scriptResponse.ok) {
      return NextResponse.json(
        {
          error: "Google Apps Script returned an HTTP error.",
          status: scriptResponse.status,
          details: responseText,
        },
        { status: 502 },
      );
    }

    let scriptResult: {
      success?: boolean;
      error?: string;
    };

    try {
      scriptResult = JSON.parse(responseText);
    } catch {
      return NextResponse.json(
        {
          error: "Google Apps Script returned an invalid response.",
          details: responseText,
        },
        { status: 502 },
      );
    }

    // IMPORTANT:
    // Apps Script may return HTTP 200 even when your try/catch
    // returned { success: false }.
    if (!scriptResult.success) {
      console.error("Google Apps Script reported failure:", scriptResult.error);

      return NextResponse.json(
        {
          error: "Google Apps Script failed to save the RSVP.",
          details: scriptResult.error ?? "Unknown Apps Script error",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("RSVP API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while submitting your RSVP.",
      },
      { status: 500 },
    );
  }
}
