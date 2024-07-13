import express from "express";
const router = express.Router();
import {
  Acread,
  Acpost,
  Acdelete,
  Ac_read,
  Ac_post,
  AcreadOne
  //  Acupdate,
} from "../controllers/AcCleaning.js";

// Routes for Product CRUD operations
router.get("/", Acread);
router.get("/:id", AcreadOne);
router.post("/", Acpost);
router.get("/One", Ac_read);
router.post("/One", Ac_post);
router.delete("/:id", Acdelete);
// router.put("/:id", Acupdate);

export default router;
