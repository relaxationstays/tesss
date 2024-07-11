import mongoose from "mongoose";
const HomeReportSchema = new mongoose.Schema(
  {
    hours: Number,
    cleaners: Number,
    Material: Number,
    Fregency: String,
    days: [String],
    date: Date,
    TotalAmount: Number,
    Vat: Number,
    Email: String,
    Contact: String,
    Name: String,
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("HomeReportSchema", HomeReportSchema);
