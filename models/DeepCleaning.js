import mongoose from "mongoose";

const DeepCleaningSchema = new mongoose.Schema({
  name: { type: String, required: false },
  path: { type: String, required: false },
  price: { type: Number, required: false },
});
export default mongoose.model("DeepCleaning", DeepCleaningSchema);
