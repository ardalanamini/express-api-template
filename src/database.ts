import { DATABASE_URI } from "#src/config/index";
import mongoose from "mongoose";

mongoose.connect(
  DATABASE_URI,
  (error) => {
    if (error == null) return console.log("Database connection established.");

    console.error(error);

    process.exit(1);
  },
);

export default mongoose;
