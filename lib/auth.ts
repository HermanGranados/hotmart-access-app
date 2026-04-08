import crypto from "crypto";

export function hashDocument(document: string) {
  return crypto
    .createHash("sha256")
    .update(document.trim())
    .digest("hex");
}