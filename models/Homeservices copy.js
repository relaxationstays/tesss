import mongoose from "mongoose";

const ArrayDataSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const PricingSchemeSchema = new mongoose.Schema({
  arrayData: [ArrayDataSchema], // Array of time intervals with prices
  min: { type: Number, required: true }, // Minimum value
  max: { type: Number, required: true }, // Maximum value
  materials: { type: Number, required: true }, // Materials cost
});
// const homeSchema = new mongoose.Schema({});
export default mongoose.model("Homeservice", PricingSchemeSchema);
