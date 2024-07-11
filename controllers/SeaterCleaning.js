import SeaterCleaning from "../models/SeaterBookings.js";
// import HomeServiceHours from "../models/arrayhomeservice.js";
// Controller functions
export const Seaterread = async (req, res, next) => {
  try {
    const Seaterclng = await SeaterCleaning.find();
    res.json(Seaterclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Seaterpost = async (req, res, next) => {
  try {
    const data = req.body;
    const SeaterCleaningx = new SeaterCleaning(data);
    const savedSeater = await SeaterCleaningx.save();
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
    res.status(201).json(savedSeater);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const Seaterdelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await SeaterCleaning.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Seater not found" });
    }
    res.json({ message: "SeaterCleaning deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
