import express from "express";
const router = express.Router();
import {
  Acread,
  Acpost,
  Acdelete,
  //  Acupdate,
} from "../controllers/AcCleaning.js";

// Routes for Product CRUD operations
router.get("/", Acread);
router.post("/", Acpost);
router.delete("/:id", Acdelete);
// router.put("/:id", Acupdate);

export default router;
