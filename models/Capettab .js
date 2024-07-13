import mongoose from "mongoose";
const CarpetPdtSchema = new mongoose.Schema(
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

export default mongoose.model("CarpetPdtSchema", CarpetPdtSchema);
