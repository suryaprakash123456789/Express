import express from "express";
import { postdata } from "../controllers/rumconrollers.js";
import { deleteData, getdata, getdataByID, putdata } from "../controllers/rumconrollers.js";

const router = express.Router();

router.get("/", getdata);
router.put("/:id", putdata);
router.post("/", postdata);
router.delete("/:id", deleteData);
router.get("/:id",getdataByID)



export default router;