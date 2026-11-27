#!/usr/bin/env node
// Documentation hygiene checks (plain Node, no dependencies).
// Exit code 1 if any FAIL. WARN and INFO never fail the run.
//
//   a. relative markdown links and #anchors resolve (CLAUDE.md, README.md, docs/**, stories/**)
//   b. every D-nnn, Q-nnn, P-nnn referenced in docs/ or stories/ is defined in
//      docs/DECISIONS.md or docs/OPEN_QUESTIONS.md
//   c. "ChatGPT" in CLAUDE.md (the startup file) is a FAIL; it is not part of the workflow
//   e. CLAUDE.md size; WARN if over 8 KB (it must stay a one-page orientation)
//
// Links into deleted pre-reset files point at the GitHub permalink of commit 58d0060
// (D-085), so they are external and not checked here.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const results = { FAIL: [], WARN: [], INFO: [] };
const report = (level, check, msg) => results[level].push(`[${check}] ${msg}`);
const rel = (p) => relative(ROOT, p).split(sep).join("/");

// ---------- file collection ----------
function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}
const linkFiles = [
  join(ROOT, "CLAUDE.md"),
  join(ROOT, "README.md"),
  ...walk(join(ROOT, "docs")),
  ...walk(join(ROOT, "stories")),
].filter(existsSync);
const idFiles = linkFiles.filter((f) => /^(docs|stories)\//.test(rel(f)));

const cache = new Map();
const read = (f) => {
  if (!cache.has(f)) cache.set(f, readFileSync(f, "utf8"));
  return cache.get(f);
};

// Replace fenced code blocks and inline code with blanks (keeps line numbers).
function stripCode(text) {
  const lines = text.split("\n");
  let fence = null;
  return lines
    .map((line) => {
      const m = line.match(/^\s*(```+|~~~+)/);
      if (m) {
        if (!fence) fence = m[1][0];
        else if (m[1][0] === fence) fence = null;
        return "";
      }
      if (fence) return "";
      return line.replace(/(`+)[^`]*?\1/g, (s) => " ".repeat(s.length));
    })
    .join("\n");
}

// ---------- a. links and anchors ----------
function slugify(heading) {
  return heading
    .replace(/<[^>]*>/g, "")
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~]/g, (c) => (c === "_" ? "_" : ""))
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, "")
    .replace(/\s/g, "-");
}
const anchorCache = new Map();
function anchorsOf(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const set = new Set();
  const seen = new Map();
  const text = stripCode(read(file));
  for (const line of text.split("\n")) {
    const h = line.match(/^ {0,3}#{1,6}\s+(.*?)\s*#*\s*$/);
    if (h) {
      let slug = slugify(h[1]);
      const n = seen.get(slug) ?? 0;
      seen.set(slug, n + 1);
      set.add(n === 0 ? slug : `${slug}-${n}`);
    }
  }
  for (const m of text.matchAll(/<a\s+[^>]*(?:name|id)="([^"]+)"/g)) set.add(m[1]);
  anchorCache.set(file, set);
  return set;
}

const LINK_RE = /!?\[(?:[^\]\\]|\\.)*\]\(\s*(<[^>]*>|[^)\s]*)(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)/g;
let linkCount = 0;
for (const file of linkFiles) {
  const text = stripCode(read(file));
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(LINK_RE)) {
      let target = m[1].replace(/^<|>$/g, "");
      if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("//")) continue;
      linkCount++;
      const where = `${rel(file)}:${i + 1}`;
      const [pathPart, ...rest] = target.split("#");
      const anchor = rest.join("#");
      let dest;
      try {
        dest = pathPart === "" ? file : resolve(dirname(file), decodeURIComponent(pathPart));
      } catch {
        report("FAIL", "a", `${where}: undecodable link ${target}`);
        continue;
      }
      if (!existsSync(dest)) {
        report("FAIL", "a", `${where}: broken link ${target}`);
        continue;
      }
      if (anchor && statSync(dest).isFile() && dest.endsWith(".md")) {
        let wanted;
        try {
          wanted = decodeURIComponent(anchor).toLowerCase();
        } catch {
          wanted = anchor.toLowerCase();
        }
        if (!anchorsOf(dest).has(wanted) && !anchorsOf(dest).has(anchor)) {
          report("FAIL", "a", `${where}: anchor #${anchor} not found in ${rel(dest)}`);
        }
      }
    }
  });
}
report("INFO", "a", `${linkCount} relative links checked in ${linkFiles.length} markdown files`);

// ---------- b. decision / question / proposal IDs ----------
const defined = new Set();
for (const name of ["DECISIONS.md", "OPEN_QUESTIONS.md"]) {
  const f = join(ROOT, "docs", name);
  if (!existsSync(f)) {
    report("FAIL", "b", `docs/${name} is missing`);
    continue;
  }
  for (const line of read(f).split("\n")) {
    const m = line.match(/^\s*(?:\|\s*\**|#{1,6}\s+\**)((?:D|Q|P)-\d{3})\b/);
    if (m) defined.add(m[1]);
  }
}
const ID_RE = /(?<![A-Za-z0-9_-])((?:D|Q|P)-\d{3})(?![0-9A-Za-z])/g;
const missing = new Map(); // id -> Set of files
for (const file of idFiles) {
  for (const m of stripCode(read(file)).matchAll(ID_RE)) {
    if (!defined.has(m[1])) {
      if (!missing.has(m[1])) missing.set(m[1], new Set());
      missing.get(m[1]).add(rel(file));
    }
  }
}
for (const [id, files] of [...missing].sort()) {
  const list = [...files];
  report("FAIL", "b", `${id} is referenced but not defined (${list.slice(0, 3).join(", ")}${list.length > 3 ? ` and ${list.length - 3} more` : ""})`);
}
report("INFO", "b", `${defined.size} IDs defined in DECISIONS.md / OPEN_QUESTIONS.md`);

// ---------- c. ChatGPT in the startup file ----------
for (const file of linkFiles.filter((f) => rel(f) === "CLAUDE.md")) {
  read(file).split("\n").forEach((line, i) => {
    if (/chatgpt/i.test(line)) report("FAIL", "c", `CLAUDE.md:${i + 1}: "ChatGPT" mentioned in the startup file`);
  });
}

// ---------- e. CLAUDE.md size ----------
const claudeMd = join(ROOT, "CLAUDE.md");
if (existsSync(claudeMd)) {
  const bytes = statSync(claudeMd).size;
  report("INFO", "e", `CLAUDE.md: ${bytes} bytes (${(bytes / 1024).toFixed(1)} KB)`);
  if (bytes > 8 * 1024) report("WARN", "e", `CLAUDE.md is over the 8 KB guide; keep it one page`);
}

// ---------- output ----------
for (const level of ["FAIL", "WARN", "INFO"]) {
  for (const msg of results[level]) console.log(`${level} ${msg}`);
}
console.log(`\ndocs:check: ${results.FAIL.length} FAIL, ${results.WARN.length} WARN, ${results.INFO.length} INFO`);
process.exit(results.FAIL.length ? 1 : 0);
