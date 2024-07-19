import express from "express";
const router = express.Router();
import {
  WashAndFoldread,
  WashAndFoldpost,
  WashAndFolddelete,
  //  WashAndFoldCleaningupdate,
} from "../controllers/WashAndFold.js";

// Routes for Product CRUD operations
router.get("/", WashAndFoldread);
router.post("/", WashAndFoldpost);
router.delete("/:id", WashAndFolddelete);
// router.put("/:id", WashAndFoldCleaningupdate);

export default router;
