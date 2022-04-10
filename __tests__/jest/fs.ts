import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import * as path from "node:path";

const DIRECTORY = path.resolve(process.cwd(), "node_modules", ".cache");
const PATH = path.resolve(DIRECTORY, ".jest-mongodb");

const encoding = "utf8";

mkdirSync(DIRECTORY, { recursive: true });

export function writeDBUri(uri: string) {
  writeFileSync(PATH, uri, { encoding });
}

export function readDBUri() {
  return readFileSync(PATH, { encoding });
}

export function pruneDBUri() {
  rmSync(PATH);
}

export function pruneDBBinaries(options: { version?: string, downloadDir?: string }) {
  const { downloadDir, version } = options;

  if (downloadDir == null || version == null) return;

  if (!existsSync(downloadDir)) return;

  const binaries = readdirSync(downloadDir);

  if (binaries.length === 0) return;

  const oldBinaries = binaries.filter(binary => !binary.endsWith(version));

  if (oldBinaries.length === 0) return;

  if (binaries.length === oldBinaries.length) return rmSync(downloadDir, { recursive: true });

  for (const binary of oldBinaries) {
    rmSync(path.resolve(downloadDir, binary));
  }
}
