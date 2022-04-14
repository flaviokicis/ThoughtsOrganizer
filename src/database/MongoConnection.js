import mongoose from "mongoose";

export async function connectToDatabase(url) {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    console.log(
      "Error while connecting to MongoDB.\n Please, try double-checking URL connection string." +
        error
    );
  }
}
