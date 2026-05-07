import { randomBytes } from "node:crypto";

export function nowIso(): string {
  return new Date().toISOString();
}

export function normalizeSlugName(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function randomSuffix(length = 5): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const bytes = randomBytes(length);

  let suffix = "";
  for (let i = 0; i < length; i += 1) {
    suffix += chars[bytes[i] % chars.length];
  }

  return suffix;
}

export function parseCommaSeparatedTags(raw: string): string[] {
  const seen = new Set<string>();
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => {
      const key = value.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export function parseLineItems(raw: string): string[] {
  return raw
    .split("\n")
    .map((value) => value.trim())
    .filter(Boolean);
}

export function buildBackupName(date = new Date()): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");
  return `backup_${year}${month}${day}_${hour}${minute}`;
}
