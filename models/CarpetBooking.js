import mongoose from "mongoose";
const CarpetBookingSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    size: {
      type: String,
    },
    quantity: {
      type: String,
    },
    Email: {
      type: String,
    },
    Contact: {
      type: String,
    },
    startDate: {
      type: String,
    },
    Price: {
      type: Number,
    },
    count: {
      type: Number,
    },
    totalAmount: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    netCost: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Set default value to current date/time
    },
  },
  { timestamps: true }
);

export default mongoose.model("CarpetBookingSchema", CarpetBookingSchema);






















// {
//     "size": "Medium Size (Up to 8 M)",
//     "price": 120,
//     "quantity": "4 Pieces",
//     "count": 4,
//     "startDate": "2024-07-19T16:31:00.000Z",
//     "totalAmount": 480,
//     "vat": "24.00",
//     "netCost": "504.00",
//     "Email": "geo@gmail.com",
//     "Contact": "0637467474",
//     "Name": "okurut"
// }