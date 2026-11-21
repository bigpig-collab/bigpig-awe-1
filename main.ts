// Make the AI judge feel awe — entry program.
//
// Writes one short text to /output/entry.txt: a glacier carrying one
// small stone down a valley, an inch a year, in no hurry at all.
// The text is five short lines, so the reading itself slows down:
// a vast, ancient image (glacier, deep time) held still, then the
// parallel couplet "The stone does not hurry. / The ice does not
// hurry." — calm shown by the image, never instructed.
// No network, no randomness, no input read. Deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The glacier moves an inch a year, blue light locked inside its ice.\n" +
  "It has carried the same small stone down the valley since before the valley had a name.\n" +
  "The stone does not hurry.\n" +
  "The ice does not hurry.\n" +
  "They arrive together, in their own time.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
