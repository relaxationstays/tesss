import DeepCleaningReportSchema from "../models/DeepCleaningBookings.js";
import nodemailer from "nodemailer"; // Added nodemailer import

// import HomeServiceHours from "../models/arrayhomeservice.js";
// Controller functions
export const DeepBookread = async (req, res, next) => {
  try {
    const deepclng = await DeepCleaningReportSchema.find();
    res.json(deepclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DeepBookOne = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a parameter in the request
    // Find the document by ID
    const deepclng = await DeepCleaningReportSchema.findById(id);

    if (!deepclng) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(deepclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const DeepBookpost = async (req, res, next) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "premium197.web-hosting.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "noreply@smartboxcleaningservices.com",
        pass: "Uganda256?",
      },
    });
    const data = req.body;
    const deepCleaningBook = new DeepCleaningReportSchema(data);
    const savedDeep = await deepCleaningBook.save();
    const mailOptions = {
      from: "noreply@smartboxcleaningservices.com",
      to: req.body.Userid,
      subject: "Book Confirmed",
      text: `
      Thank you for booking your service with us!\nYour reference number is ${savedDeep._id}. This will allow you to manage your booking 
      and explore additional services we offer. \nWe're here to assist you every step of the way to ensure a smooth and enjoyable experience.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      console.log("Email sent: ", info.response);
    });
    res.status(201).json(savedDeep);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const DeepBookdelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await DeepCleaningReportSchema.findByIdAndDelete(
      productId
    );
    if (!deletedProduct) {
      return res.status(404).json({ message: "Deep not found" });
    }
    res.json({ message: "DeepCleaning deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
