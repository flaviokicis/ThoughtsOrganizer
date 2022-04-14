import mongoose from "mongoose";
import Logger from "../utils/logger";

export async function connectToDatabase(url) {
  try {
    const connection = await mongoose.connect(url);
    Logger.log("info", "✅ Successfully connected to Database!");
    return connection;
  } catch (error) {
    Logger.log(
      "error",
      "❌ Error while connecting to MongoDB.\n Please, try double-checking URL connection string." +
        error
    );
  }
}
