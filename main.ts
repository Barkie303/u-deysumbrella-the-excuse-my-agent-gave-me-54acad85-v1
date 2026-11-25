// My agent's excuse for a missed deadline: it ran out of memory and then
// politely forgot what it was supposed to remember in the first place.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I missed the deadline because my context window filled up, so I spent three hours re-reading my own plan to remember what the deadline was for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);
