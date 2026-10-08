/**
 * npm run deploy:cf
 *
 * Deploys to Cloudflare Workers. No variables or secrets are needed: the
 * public site renders without any. `wrangler deploy` builds the site itself
 * (see "build" in wrangler.jsonc), so Cloudflare's dashboard Git builds work
 * with their defaults too. Records the URL in content/generated/deploy.json
 * for `npm run status`.
 *
 * Needs Cloudflare credentials once: `npx wrangler login`, or
 * CLOUDFLARE_API_TOKEN (+ CLOUDFLARE_ACCOUNT_ID) in the environment.
 */
import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import config from "@/content/audit.config";
import { workerName } from "./lib/config";

const ROOT = process.cwd();
const bin = (name: string) => path.join(ROOT, "node_modules", ".bin", name);

function run(cmd: string, a: string[], opts: { capture?: boolean } = {}) {
  const r = spawnSync(cmd, a, { cwd: ROOT, encoding: "utf8", stdio: opts.capture ? ["pipe", "pipe", "inherit"] : "inherit" });
  if (r.status !== 0) throw new Error(`${path.basename(cmd)} ${a.join(" ")} failed`);
  return r.stdout ?? "";
}

async function main() {
  const name = workerName();
  if (!config.company.fictional && name === "company-audit")
    throw new Error('wrangler.jsonc still names the Worker "company-audit". `npm run new` names it for you; or set "name" and the WORKER_SELF_REFERENCE service yourself.');
  const who = spawnSync(bin("wrangler"), ["whoami"], { cwd: ROOT, encoding: "utf8" });
  if (who.status !== 0 || /not authenticated/i.test(who.stdout + who.stderr))
    throw new Error("Not signed in to Cloudflare. Run `npx wrangler login` (or set CLOUDFLARE_API_TOKEN), then try again.");

  console.log(`  building and deploying the Worker "${name}"…`);
  const out = run(bin("wrangler"), ["deploy"], { capture: true });
  process.stdout.write(out);
  const url = out.match(/https:\/\/[^\s]+\.workers\.dev/)?.[0] ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

  writeFileSync(path.join(ROOT, "content", "generated", "deploy.json"), JSON.stringify({ target: "cloudflare", worker: name, url, at: new Date().toISOString().slice(0, 10) }, null, 2) + "\n");
  console.log(`\n  ✓ live${url ? ` at ${url}` : ""}`);
}

main().catch((e) => {
  console.error(`  ✗ ${e instanceof Error ? e.message : e}`);
  process.exit(1);
});
