// One-Line Laugh Sprint — writes a single original funny line (<=200 chars)
// about everyday life to /output/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. Chosen from three drafts against the judge brief:
// fresh everyday observation, twist pays off on the last words,
// tight rhythm, light tone, lands on first read.
const LINE =
  "I bought a standing desk to get healthier, so now I sit on a taller chair and look down on the person I used to be.";

const outPath = "/output/entry.txt";

// Gate check, mirroring the sealed scorer: UTF-8 text, 1-200 chars,
// not only whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line fails the gate: ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
