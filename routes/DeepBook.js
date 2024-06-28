import express from "express";
const router = express.Router();
import {
  DeepBookread,
  DeepBookpost,
  DeepBookdelete,
  DeepBookOne
  //  DeepBookupdate,
} from "../controllers/DeepBook.js";

// Routes for Product CRUD operations
router.get("/", DeepBookread);
router.get("/:id", DeepBookOne);
router.post("/", DeepBookpost);
router.delete("/:id", DeepBookdelete);
// router.put("/:id", Deepupdate);

export default router;
