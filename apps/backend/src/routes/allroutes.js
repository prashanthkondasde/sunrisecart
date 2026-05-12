import express from "express";
import env from "../config/env.js";
const router = express.Router();

import authRouter from '../api/auth/auth.routes.js';
const checkUrl = (req, res, next) => {
  console.log("current url is", req.originalUrl);
  next();
};

router.use("/auth", authRouter);
router.get("/", (req, res) => {
  res.send("Home tess");
  //res.render('Home')
});
router.get("/about", checkUrl, (req, res) => {
  console.log(req.get("host"));
  res.send(env.PORT);
});
router.get("/contactus", checkUrl, (req, res) => {
  res.send("This is contact Page");
});

export default router;
