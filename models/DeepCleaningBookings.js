import mongoose from "mongoose";

const DeepCleaningReportSchema = new mongoose.Schema({
  Userid: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  TotalPrice: {
    type: Number,
    required: true,
  },
  NetCost: {
    type: Number,
    required: true,
  },
  Vat: {
    type: Number,
    required: true,
  },
  DateTime: {
    type: String,
    required: true,
  },
  Villa: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Villa", // Reference to Villa schema if using Mongoose population
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  Apartment: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Apartment", // Reference to Apartment schema if using Mongoose population
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model(
  "DeepCleaningReportSchema",
  DeepCleaningReportSchema
);
