import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const runtime = "nodejs"

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error("Supabase configuration is missing")
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } })
}

export async function POST(request: Request) {
  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: "Invalid request body." }, { status: 400 }) }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid request body." }, { status: 400 })

  const { email, phone } = body as Record<string, unknown>
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : ""
  const normalizedPhone = typeof phone === "string" ? phone.trim() : ""
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)
  const phoneValid = /^\+[1-9]\d{7,14}$/.test(normalizedPhone)
  if ((!emailValid && !phoneValid) || (emailValid && phoneValid)) return NextResponse.json({ error: "Provide one valid email or phone number." }, { status: 400 })

  try {
    const supabase = getSupabaseClient()
    const result = emailValid
      ? await supabase.auth.signInWithOtp({ email: normalizedEmail })
      : await supabase.auth.signInWithOtp({ phone: normalizedPhone })
    if (result.error) return NextResponse.json({ error: "Unable to send OTP. Please try again." }, { status: 400 })
    return NextResponse.json({ sent: true, message: "OTP sent. Check your inbox or messages." })
  } catch (error) {
    console.error("[otp] send failed", error)
    return NextResponse.json({ error: "OTP service is temporarily unavailable." }, { status: 503 })
  }
}

export async function GET() {
  return NextResponse.json({ error: "Use POST to send an OTP." }, { status: 405, headers: { Allow: "POST" } })
}
