// Checks biome.json against the lowest Biome version our peerDependencies range allows.
// Consumers can install any Biome version in that range, so the shared config must work on the
// floor too. If this fails, the config relies on something newer than the floor: raise the floor
// in peerDependencies and release at least a minor version.
//
// Usage: npm run test:peer-floor

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { minVersion } from "semver";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const peerRange = packageJson.peerDependencies?.["@biomejs/biome"];

// minVersion returns null for a range no version can satisfy, such as ">3 <2".
const floor = peerRange && minVersion(peerRange)?.version;
if (!floor) {
  process.stderr.write(
    `Can't find the lowest version allowed by peerDependencies["@biomejs/biome"]: ${JSON.stringify(peerRange)}.\n`,
  );
  process.exit(1);
}

process.stdout.write(`Checking biome.json with @biomejs/biome@${floor} (peer range floor)\n`);

// --yes skips npx's install prompt in a terminal, since the floor version isn't installed locally.
const result = spawnSync("npx", ["--yes", `@biomejs/biome@${floor}`, "check", "biome.json"], {
  stdio: "inherit",
});
if (result.error) {
  process.stderr.write(`Failed to run npx: ${result.error.message}\n`);
}
process.exit(result.status ?? 1);
