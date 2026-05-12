const express = require("express");
const userRouter = express.Router();
const { signup, login, googleSignin, verifyOtp, resetPassword, 
    changePassword, addAlerts, updateUserProfile, getUserProfile, activityLogs  } = require("./controller");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/glogin", googleSignin);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/reset-password", resetPassword);
// userRouter.post("/personal-info", getUserDetails)
userRouter.post("/change-pass", changePassword);

module.exports = authRouter;
