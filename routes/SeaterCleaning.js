import express from "express";
const router = express.Router();
import {
  Seaterread,
  Seaterpost,
  Seaterdelete,
  //  Seaterupdate,
} from "../controllers/SeaterCleaning.js";

// Routes for Product CRUD operations
router.get("/", Seaterread);
router.post("/", Seaterpost);
router.delete("/:id", Seaterdelete);
// router.put("/:id", Deepupdate);

export default router;
