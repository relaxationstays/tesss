import CarpetBookingSchema from "../models/CarpetBooking.js";
import nodemailer from "nodemailer"; // Make sure nodemailer is properly installed

// import CarpetBookServiceHours from "../models/arrayCarpetBookservice.js";
// Controller functions
export const CarpetBookread = async (req, res, next) => {
  try {
    const CarpetBookclng = await CarpetBookingSchema.find();
    res.json(CarpetBookclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const CarpetBookpost = async (req, res, next) => {
  try {
    const data = req.body;
    const CarpetBookx = new CarpetBookingSchema(data);
    const savedCarpetBook = await CarpetBookx.save();
    // Send confirmation email
    const transporter = nodemailer.createTransport({
      host: "premium197.web-hosting.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: "noreply@smartboxcleaningservices.com",
        pass: "Uganda256?", // Replace with your actual password
      },
    });

    const mailOptions = {
      from: "noreply@smartboxcleaningservices.com",
      to: req.body.Email,
      subject: "Booking Confirmed",
      text: `
        Thank you for booking your service with us!\n
        Your reference number is ${savedCarpetBook._id}.\n
        This will allow you to manage your booking and explore additional services we offer.\n
        We're here to assist you every step of the way to ensure a smooth and enjoyable experience.
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }
      console.log("Email sent: ", info.response);
    });

    res.status(201).json(savedCarpetBook); // Respond with saved document
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(400).json({ error: error.message });
  }
};

 
export const CarpetBookdelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await CarpetBookCleaning.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "CarpetBook not found" });
    }
    res.json({ message: "CarpetBookCleaning deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
