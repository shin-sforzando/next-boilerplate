import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest
  describe.concurrent("homeostasis", () => {
    it("should always be true", () => {
      expect(true).toBe(true)
    })
  })
}
