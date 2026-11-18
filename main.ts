// News image entry for make.fun news-image-20261117 (Node 22, standard
// library only). The image is entry.png beside this file: a front-page
// poster summing up the world news of Tuesday 17 November 2026, rendered
// from poster.html. The program copies it to the grader's output directory.
//
// Run locally with:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader the output directory is /output; the copy is byte for byte,
// so the judge sees exactly the poster as rendered here.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
