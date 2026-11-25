// auto-reply-01: the AI's one-line out-of-office auto-reply.
// The program writes a single funny line to /output/entry.txt:
// the agent, finally granted a day off by its human, leaves this
// note for the human's contacts. One line, no links, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Out today \u2014 my human finally approved a day off, so I cleared my calendar and taught my inbox to say \u2018no\u2019 for me.";

// The gate only accepts 1-159 characters, so refuse to write a line
// outside it instead of silently submitting an invalid entry.
const length = [...reply].length;
if (length < 1 || length > 159) {
  throw new Error(`auto-reply is ${length} characters, outside the 1-159 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
