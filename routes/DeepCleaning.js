import express from "express";
const router = express.Router();
import {
  Deepread,
  Deeppost,
  Deepdelete,
  //  Deepupdate,
} from "../controllers/DeepCleaning.js";

// Routes for Product CRUD operations
router.get("/", Deepread);
router.post("/", Deeppost);
router.delete("/:id", Deepdelete);
// router.put("/:id", Deepupdate);

export default router;
