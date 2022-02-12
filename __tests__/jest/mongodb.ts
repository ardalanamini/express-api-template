import { MongoMemoryReplSet } from "mongodb-memory-server";

const MONGOD = new MongoMemoryReplSet({
  binary: {
    version: "5.0.6",
  },
  replSet: {
    count: 1,
    storageEngine: "wiredTiger",
  },
});

export default MONGOD;
