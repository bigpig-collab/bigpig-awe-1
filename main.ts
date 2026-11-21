import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "You lie with your cheek on the dog's side.",
  "It rises. It falls. It rises.",
  "The house ticks itself to sleep around you.",
  "His feet run a little, through a field that never ends.",
  "The night is big, and the dog is warm,",
  "and you are small between them.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
