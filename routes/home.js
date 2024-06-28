import express from "express";
const router = express.Router();
// const productController = require("../controllers/productController.js");
import {
  getAllProducts,
  createProduct,
} from "../controllers/homeController.js";

// Routes for Product CRUD operations
router.get("/", getAllProducts);
router.post("/", createProduct);

export default router;
