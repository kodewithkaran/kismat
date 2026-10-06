import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"

const otpPattern = /^\d{6}$/

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error("Supabase configuration is missing")
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { email, phone, token, type } = body as Record<string, unknown>
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : ""
  const normalizedPhone = typeof phone === "string" ? phone.trim() : ""
  const normalizedToken = typeof token === "string" ? token.trim() : ""
  const normalizedType = type === "phone" ? "phone" : "email"

  if ((!normalizedEmail && !normalizedPhone) || !otpPattern.test(normalizedToken)) {
    return NextResponse.json(
      { error: "Provide a valid email or phone number and a 6-digit OTP." },
      { status: 400 },
    )
  }

  if (normalizedType === "email" && !normalizedEmail) {
    return NextResponse.json({ error: "An email address is required for this OTP." }, { status: 400 })
  }

  if (normalizedType === "phone" && !normalizedPhone) {
    return NextResponse.json({ error: "A phone number is required for this OTP." }, { status: 400 })
  }

  try {
    const supabase = getSupabaseClient()
    const result = await supabase.auth.verifyOtp(
      normalizedType === "email"
        ? { email: normalizedEmail, token: normalizedToken, type: "email" }
        : { phone: normalizedPhone, token: normalizedToken, type: "sms" },
    )

    if (result.error || !result.data.session || !result.data.user) {
      return NextResponse.json({ error: "The OTP is invalid or has expired." }, { status: 401 })
    }

    return NextResponse.json({
      verified: true,
      user: {
        id: result.data.user.id,
        email: result.data.user.email ?? null,
        phone: result.data.user.phone ?? null,
      },
      session: result.data.session,
    })
  } catch (error) {
    console.error("[otp] verification failed", error)
    return NextResponse.json({ error: "OTP verification is temporarily unavailable." }, { status: 503 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Use POST to validate an OTP." }, { status: 405, headers: { Allow: "POST" } })
}
