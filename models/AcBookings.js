import mongoose from "mongoose";
const AcReportSchema = new mongoose.Schema(
  {
    SelectedUnit: {
      type: String,
       
    },
    SelectedService: {
      name: {
        type: String,
         
      },
      price: {
        type: Number,
         
      },
    },
    SelectedDate: {
      type: String,
       
    },
    Total_Amount: {
      type: Number,
       
    },
    VAT: {
      type: Number,
  
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to current date/time
    },
  },
  { timestamps: true }
);

export default mongoose.model("AcReportSchema", AcReportSchema);
