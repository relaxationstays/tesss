import AcCleaning from "../models/AcBookings.js";
import AcPdtSchema from "../models/AcTab.js";
import nodemailer from "nodemailer"; // Make sure nodemailer is properly installed

// import HomeServiceHours from "../models/arrayhomeservice.js";
// Controller functions
export const Acread = async (req, res, next) => {
  try {
    const Acclng = await AcCleaning.find();
    res.json(Acclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const Ac_read = async (req, res, next) => {
  try {
    const Acclng = await AcPdtSchema.find();
    res.json(Acclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const AcreadOne = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a parameter in the request

    // Find the document by ID
    const deepclng = await AcCleaning.findById(id);

    if (!deepclng) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.json(deepclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Acpost = async (req, res, next) => {
  try {
    const data = req.body;
    const AcCleaningx = new AcCleaning(data);
    const savedAc = await AcCleaningx.save();
    const transporter = nodemailer.createTransport({
      host: "premium197.web-hosting.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "noreply@smartboxcleaningservices.com",
        pass: "Uganda256?",
      },
    });
    const mailOptions = {
      from: "noreply@smartboxcleaningservices.com",
      to: req.body.Email,
      subject: "Book Confirmed",
      text: `
      Thank you for booking your service with us!\nYour reference number is ${savedAc._id}. This will allow you to manage your booking and explore additional services we offer. \nWe're here to assist you every step of the way to ensure a smooth and enjoyable experience.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      console.log("Email sent: ", info.response);
    });
    res.status(201).json(savedAc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const Ac_post = async (req, res, next) => {
  try {
    const data = req.body;
    const AcCleaningx = new AcPdtSchema(data);
    const savedAc = await AcCleaningx.save();
    res.status(201).json(savedAc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const Acdelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await AcCleaning.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Ac not found" });
    }
    res.json({ message: "AcCleaning deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
