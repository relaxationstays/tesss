import mongoose from "mongoose";

const SeaterReportSchema = new mongoose.Schema(
  {
    Two_Seater: {
      type: String,
      required: true,
    },
    Three_Seater: {
      type: String,
      required: true,
    },
    Four_Seater: {
      type: String,
      required: true,
    },
    Five_Seater: {
      type: Number,
      required: true,
    },
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

export default mongoose.model(
  "SeaterReportSchema",
  SeaterReportSchema
);
