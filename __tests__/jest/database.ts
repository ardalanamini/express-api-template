import * as Models from "#src/models/index";
import { uniq } from "lodash";
import mongoose, { Model } from "mongoose";
import { readDBUri } from "./fs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COLLECTIONS = uniq(Object.values(Models).map((model: Model<any>) => model.collection.name));

export async function connectDB() {
  await mongoose.connect(readDBUri(), { dbName: `test-database-${process.env.JEST_WORKER_ID}` });
}

export async function resetDB() {
  await Promise.all(
    COLLECTIONS.map(collection => mongoose.connection.db.collection(collection).deleteMany({})),
  );
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
