// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { version } from "#package.json";

export const API_VERSION = version as `${number}.${number}.${number}${"" | `-${"alpha" | "beta"}${`.${number}` | ""}`}`;
