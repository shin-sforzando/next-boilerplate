import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 *
 * @param inputs - The class names to merge
 * @returns The merged class names
 */
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
