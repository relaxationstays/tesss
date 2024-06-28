import mongoose from "mongoose";
const PricingSchemeSchema = new mongoose.Schema({
  arrayData: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // Array of time intervals with prices
  min: { type: Number, required: true }, // Minimum value
  max: { type: Number, required: true }, // Maximum value
  materials: { type: Number, required: true }, // Materials cost
});
// const homeSchema = new mongoose.Schema({});
export default mongoose.model("Homeservice", PricingSchemeSchema);

// export default mongoose.model("Homeservice", PricingSchemeSchema);
