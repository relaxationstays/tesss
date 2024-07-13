import DeepCleaning from "../models/DeepCleaning.js";
import nodemailer from "nodemailer"; // Make sure nodemailer is properly installed

// import HomeServiceHours from "../models/arrayhomeservice.js";
// Controller functions
export const Deepread = async (req, res, next) => {
  try {
    const deepclng = await DeepCleaning.find();
    res.json(deepclng);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const Deeppost = async (req, res, next) => {
  try {
    const data = req.body;
    const deepCleaning = new DeepCleaning(data);
    const savedDeep = await deepCleaning.save();
    res.status(201).json(savedDeep);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const Deepdelete = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await DeepCleaning.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Deep not found" });
    }
    res.json({ message: "DeepCleaning deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
