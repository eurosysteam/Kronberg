import { NextResponse } from "next/server";
import {
  createTrainingSessionValue,
  getCookieOptions,
  resolvePasswordArea,
  TRAINING_COOKIE,
} from "@/lib/training-session";

const invalidDelayMs = 650;

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as { password?: unknown } | null;
  const password = typeof payload?.password === "string" ? payload.password : "";
  const area = resolvePasswordArea(password);

  if (!area) {
    await new Promise((resolve) => setTimeout(resolve, invalidDelayMs));
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true, area });
  response.cookies.set(TRAINING_COOKIE, createTrainingSessionValue(area), getCookieOptions());
  return response;
}
