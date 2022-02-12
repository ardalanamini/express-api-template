import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

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
