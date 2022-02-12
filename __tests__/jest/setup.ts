import { writeDBUri } from "./fs";
import MONGOD from "./mongodb";

export default async function setup() {
  await MONGOD.start();

  await MONGOD.waitUntilRunning();

  writeDBUri(MONGOD.getUri());
}
