import AcCleaning from "../models/AcBookings.js";
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
      Thank you for booking your service with us!\nYour reference number is ${savedDeep._id}. This will allow you to manage your booking and explore additional services we offer. \nWe're here to assist you every step of the way to ensure a smooth and enjoyable experience.`,
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
