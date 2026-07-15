import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  company?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  privacy?: unknown;
};

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: unknown) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (
    !payload ||
    !isNonEmptyString(payload.firstName) ||
    !isNonEmptyString(payload.lastName) ||
    !isNonEmptyString(payload.company) ||
    !isValidEmail(payload.email) ||
    !isNonEmptyString(payload.subject) ||
    typeof payload.message !== "string" ||
    payload.message.trim().length < 10 ||
    payload.privacy !== true
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Demo only: no email is sent, no data is stored, and nothing is transferred externally.
  await new Promise((resolve) => setTimeout(resolve, 350));

  return NextResponse.json({ ok: true });
}
