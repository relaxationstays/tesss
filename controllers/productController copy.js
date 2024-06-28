// controllers/productController.js
import Product from "../models/Products.js";
import Product from "../models/Products.js";
// Controller functions
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const product = new Product({ name, price, description });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getAllHours = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createProductHours = async (req, res, next) => {
  try {
    const data = req.body;
    const product = new Product(data);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Other controller functions (update, delete, etc.) follow similar patterns
