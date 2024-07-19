import mongoose from "mongoose";

const IroningReportSchema = new mongoose.Schema(
  {
    booking: [],
    totalPrice: {
      type: Number,
      required: true,
    },
    vatAmount: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("IroningReportSchema", IroningReportSchema);
