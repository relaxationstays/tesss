import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; // Import the cors middleware
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Import your routes
import DeepCleaningRoutes from "./routes/DeepCleaning.js";
import DeepCleaningBook from "./routes/DeepBook.js";

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
dotenv.config();

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// CORS configuration
app.use(
  cors({
    // origin: "*",
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://6686b43b3756a81c55160ecf--tranquil-dragon-a40813.netlify.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use(express.json());

// Routes
app.use("/api/deepcleaning", DeepCleaningRoutes);
app.use("/api/deepBook", DeepCleaningBook);

// Start server
const PORT = process.env.PORT || 8801;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
