/**
 * Gemini API の一時エラー（429 / 503 / 500）に対する指数バックオフ再試行。
 */
import type { GenerateContentResult, GenerativeModel } from "@google/generative-ai";

function getHttpStatus(err: unknown): number | undefined {
  if (typeof err === "object" && err !== null && "status" in err) {
    const s = (err as { status?: number }).status;
    return typeof s === "number" ? s : undefined;
  }
  return undefined;
}

export async function generateContentWithRetry(
  model: GenerativeModel,
  prompt: string,
  options?: { maxAttempts?: number }
): Promise<GenerateContentResult> {
  const maxAttempts = options?.maxAttempts ?? 5;
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await model.generateContent(prompt);
    } catch (e: unknown) {
      lastErr = e;
      const status = getHttpStatus(e);
      const retryable = status === 429 || status === 503 || status === 500;
      if (!retryable || attempt === maxAttempts) throw e;
      const delayMs = Math.min(60_000, 2000 * 2 ** (attempt - 1));
      console.warn(
        `⚠️ Gemini 一時エラー (HTTP ${status ?? "?"})。${Math.round(delayMs / 1000)}s 後に再試行 (${attempt}/${maxAttempts})…`
      );
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}
