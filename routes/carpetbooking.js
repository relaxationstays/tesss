import express from "express";
const router = express.Router();
import {
  CarpetBookread,
  CarpetBookpost,
  CarpetBookdelete,
//   CarpetBookOne
  //  CarpetBookupdate,
} from "../controllers/CarpetBook.js";

// Routes for Product CRUD operations
router.get("/", CarpetBookread);
// router.get("/:id", CarpetBookOne);
router.post("/", CarpetBookpost);
router.delete("/:id", CarpetBookdelete);
// router.put("/:id", Carpetupdate);

export default router;
