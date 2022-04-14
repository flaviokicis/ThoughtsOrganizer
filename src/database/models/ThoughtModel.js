import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    insight: String,
    theme: String,
    due: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Thought", schema);
