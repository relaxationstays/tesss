import express from "express";
const router = express.Router();
import {
  Ironingread,
  Ironingpost,
  Ironingdelete,
  //  IroningCleaningupdate,
} from "../controllers/Ironing.js";

// Routes for Product CRUD operations
router.get("/", Ironingread);
router.post("/", Ironingpost);
router.delete("/:id", Ironingdelete);
// router.put("/:id", IroningCleaningupdate);

export default router;
