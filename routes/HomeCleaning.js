import express from "express";
const router = express.Router();
import {
  Homeread,
  Homepost,
  Homedelete,
  //  HomeCleaningupdate,
} from "../controllers/HomeCleaning.js";

// Routes for Product CRUD operations
router.get("/", Homeread);
router.post("/", Homepost);
router.delete("/:id", Homedelete);
// router.put("/:id", HomeCleaningupdate);

export default router;
