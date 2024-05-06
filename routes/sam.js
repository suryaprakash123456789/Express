// import express from 'express';
// const router = express.Router();
// console.log(router)

// router.get('/', (req, res) => {
//     res.send('<h1>Welcome to samsung world!</h1>');
// });

// router.get('/sam20', (req, res) => {
//     res.send('<h1>s20 data!</h1>');
// });

// router.get('/sam12', (req, res) => {
//     res.send('<h1> s22 data!</h1>');
// });

// router.get('/sam23', (req, res) => {
//     res.send('<h1>s23 data!</h1>');
// });

// export default router

import express from "express";
// import { postdata } from "../controllers/mobileControllers.js";
// import { getdataByid } from "../controllers/mobileControllers.js";
import {
  deleteData,
  getdata,
  getdataByid,
  postdata,
  putdata,
} from "../controllers/mobileControllers.js";
const router = express.Router();

router.get("/", getdata);
router.put("/:id", putdata);
router.post("/", postdata);
router.get("/:id", getdataByid);
// router.get('/brand/:brand',getone)
router.delete("/:id", deleteData);
// router.delete('/:id', deleteDatabyid)
// router.delete("/", deletedata);

export default router;
