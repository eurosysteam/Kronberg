import { NextResponse } from "next/server";
import { getCookieOptions, TRAINING_COOKIE } from "@/lib/training-session";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(TRAINING_COOKIE, "", {
    ...getCookieOptions(),
    maxAge: 0,
  });
  return response;
}
