import express from "express";
const router = express.Router();
import {
  DryCleaningread,
  DryCleaningpost,
  DryCleaningdelete,
  //  DryCleaningCleaningupdate,
} from "../controllers/DryCleaning.js";

// Routes for Product CRUD operations
router.get("/", DryCleaningread);
router.post("/", DryCleaningpost);
router.delete("/:id", DryCleaningdelete);
// router.put("/:id", DryCleaningCleaningupdate);

export default router;
