import { writeDBUri, pruneDBBinaries } from "./fs";
import MONGOD from "./mongodb";

export default async function setup() {
  pruneDBBinaries(MONGOD.binaryOpts);

  await MONGOD.start();

  await MONGOD.waitUntilRunning();

  writeDBUri(MONGOD.getUri());
}
