import mongoose from "mongoose";
const WashAndIronPdtSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Price: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to current date/time
    },
  },
  { timestamps: true }
);

export default mongoose.model("WashAndIronPdtSchema", WashAndIronPdtSchema);
