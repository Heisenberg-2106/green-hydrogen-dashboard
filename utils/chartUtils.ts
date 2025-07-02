/**
 * Utility functions for chart data manipulation.
 * Currently provides a simple parser to convert capacity strings
 * such as "2.5 GW", "750 MW", "0.5 MT/year" into numeric values that
 * can be plotted on a chart.
 *
 * • For power units:
 *   - GW → returns value in MW (multiplied by 1 000)
 *   - MW → returns value in MW (as-is)
 *
 * • For mass units (e.g. green-hydrogen production):
 *   - MT(/year) → returns value in MT (as-is)
 *
 * Any unrecognised unit returns the numeric portion untouched.
 */

export function parseCapacity(raw: string): number {
  if (!raw) return 0

  // Normalise white-space and case
  const value = raw.trim().toUpperCase()

  // Extract leading numeric part (supports decimals)
  const numMatch = value.match(/[\d.]+/)
  if (!numMatch) return 0
  const num = Number.parseFloat(numMatch[0])

  if (value.includes("GW")) {
    return num * 1_000 // convert to MW
  }

  if (value.includes("MW")) {
    return num
  }

  if (value.includes("MT")) {
    return num
  }

  // Fallback – return the numeric part
  return num
}
