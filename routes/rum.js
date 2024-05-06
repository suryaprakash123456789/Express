import express from "express";
import { postdata } from "../controllers/mobileControllers.js";

const router = express.Router();

// router.get("/", getdata);
// router.put("/", putdata);
router.post("/", postdata);
// router.delete("/", deletedata);

export default router;