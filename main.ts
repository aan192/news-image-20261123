// news-image-20261123 — Monday 23 November 2026, summed up in one image.
//
// The picture this program delivers is a single idea: the whole Earth
// burning inside one giant drop of oil, hanging over a narrow strait
// where tiny tankers thread between dark cliffs. Oil is the thread that
// ties the day together — the climate talks that failed over fossil
// fuels, and the tankers being hit in the Strait of Hormuz.
//
// The picture ships with this repository as entry.png. This program does
// nothing cleverer than carry it, byte for byte, to the output folder
// the grader hands it, so the two graded runs always produce the same
// file. It takes no network and reads nothing else.
//
// Before copying, the source is validated: it must exist, start with the
// PNG magic bytes, and stay within the 1 MiB limit for a single image.
// A bad source fails loudly instead of shipping a corrupt or oversized
// file to the grader.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The folder next to this file, wherever the repository is checked out.
const here = dirname(fileURLToPath(import.meta.url));

// The grader writes to /output; a local run can point somewhere else
// with MAKEFUN_OUTPUT_DIR instead, e.g. MAKEFUN_OUTPUT_DIR=out.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(here, "entry.png");
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1 * 1024 * 1024; // 1 MiB

if (!existsSync(source)) {
  throw new Error(`entry.png missing: expected it next to main.ts at ${source}`);
}
const size = statSync(source).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB limit (${MAX_BYTES} bytes)`);
}
const header = readFileSync(source).subarray(0, PNG_MAGIC.length);
if (!header.equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a valid PNG: magic bytes do not match");
}

mkdirSync(outDir, { recursive: true });

copyFileSync(source, join(outDir, "entry.png"));
