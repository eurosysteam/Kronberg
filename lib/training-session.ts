import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { TrainingArea } from "@/content/training/types";

export const TRAINING_COOKIE = "kronberg_training_access";
const validAreas: TrainingArea[] = ["leadership", "intelligence"];

function getSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set to a sufficiently long value.");
  }

  return secret;
}

function sign(area: TrainingArea) {
  return createHmac("sha256", getSecret()).update(area).digest("base64url");
}

export function createTrainingSessionValue(area: TrainingArea) {
  return `${area}.${sign(area)}`;
}

export function verifyTrainingSessionValue(value?: string): TrainingArea | null {
  if (!value) return null;

  const [area, signature] = value.split(".");

  if (!validAreas.includes(area as TrainingArea) || !signature) {
    return null;
  }

  const expected = sign(area as TrainingArea);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (actualBuffer.length !== expectedBuffer.length) {
    return null;
  }

  return timingSafeEqual(actualBuffer, expectedBuffer) ? (area as TrainingArea) : null;
}

export async function getTrainingAccess() {
  const cookieStore = await cookies();
  return verifyTrainingSessionValue(cookieStore.get(TRAINING_COOKIE)?.value);
}

export function getCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };
}

export function resolvePasswordArea(password: string): TrainingArea | null {
  const leadershipPassword = process.env.TRAINING_PASSWORD_LEADERSHIP;
  const intelligencePassword = process.env.TRAINING_PASSWORD_INTELLIGENCE;

  if (leadershipPassword && password === leadershipPassword) {
    return "leadership";
  }

  if (intelligencePassword && password === intelligencePassword) {
    return "intelligence";
  }

  return null;
}
