import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "You lie in the treehouse your father built.",
  "The tree sways, slow, in the night wind.",
  "Leaves talk above your head.",
  "Below, the yard is asleep. Above, the stars",
  "are caught in the branches, and do not fall.",
  "The tree has stood a hundred years.",
  "It is still growing, and it holds you.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
