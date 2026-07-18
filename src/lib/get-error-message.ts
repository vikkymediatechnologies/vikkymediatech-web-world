/**
 * Supabase/PostgREST errors (PostgrestError, StorageError) are plain
 * objects, not instances of Error — so `err instanceof Error` misses
 * them and falls through to a generic message. This checks for a
 * `.message` property regardless of the error's actual type.
 */
export function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;

  if (typeof err === "object" && err !== null && "message" in err) {
    const message = (err as { message?: unknown }).message;
    if (typeof message === "string" && message.length > 0) return message;
  }

  return "Something went wrong. Please try again.";
}
