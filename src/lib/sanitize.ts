const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

/** Collapse to a single line: strips CR/LF and other control chars (blocks email header injection). */
export function singleLine(value: string, max = 100): string {
  let out = "";
  for (const ch of value) {
    const c = ch.codePointAt(0) ?? 0;
    out += c < 0x20 || c === 0x7f || ch === LS || ch === PS ? " " : ch;
  }
  return out.replace(/ +/g, " ").trim().slice(0, max);
}

/** Serialize JSON for an inline <script>: escapes characters that could close the tag. */
export function safeJsonForScript(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .split(LS).join("\\u2028")
    .split(PS).join("\\u2029");
}
