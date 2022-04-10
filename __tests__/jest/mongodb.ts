import { MongoMemoryReplSet } from "mongodb-memory-server";
import * as path from "node:path";

const MONGOD = new MongoMemoryReplSet({
  binary: {
    version: "5.0.6",
    downloadDir: path.resolve(process.cwd(), "node_modules", ".cache", "mongodb-memory-server", "mongodb-binaries"),
  },
  replSet: {
    count: 1,
    storageEngine: "wiredTiger",
  },
});

export default MONGOD;
