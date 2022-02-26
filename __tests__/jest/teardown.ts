import { pruneDBUri } from "./fs";
import MONGOD from "./mongodb";

export default async function setup() {
  pruneDBUri();

  await MONGOD.stop();

  await MONGOD.cleanup({
    force: true,
  });
}
