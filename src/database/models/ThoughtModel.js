import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    theme: String,
    due: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Thought", schema);
