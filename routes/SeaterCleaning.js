import express from "express";
const router = express.Router();
import {
  Seaterread,
  Seaterpost,
  Seaterdelete,
  Seater_post,
  Seater_read,
  SeaterOne
  //  Seaterupdate,
} from "../controllers/SeaterCleaning.js";

// Routes for Product CRUD operations
router.get("/", Seaterread);
router.post("/", Seaterpost);
router.get("/:id", SeaterOne);
router.get("/One", Seater_read);
router.post("/One", Seater_post);
router.delete("/:id", Seaterdelete);
// router.put("/:id", Deepupdate);

export default router;
