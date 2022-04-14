import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: String,
    theme: String,
    due: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Thought", schema);
