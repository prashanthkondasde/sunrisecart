import express from "express";
import { validate } from '../shared/middlewares/validation.middleware.js'
import { register, login, refreshAccessToken,googleSignin, verifyOtp, resetPassword, 
    changePassword, getCurrentUser,updateUserProfile, getUserProfile,logout  } from './auth.controller.js'

import {  loginSchema,  registerSchema } from './auth.validation.js';

const authRouter = express.Router();
authRouter.post("/register", validate(registerSchema),register);
authRouter.post("/login",validate(loginSchema),login);
authRouter.post("/logout",logout);
authRouter.get("/me",getCurrentUser)
authRouter.post("/refresh", refreshAccessToken)
authRouter.post("/glogin", googleSignin);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/reset-password", resetPassword);
// userRouter.post("/personal-info", getUserDetails)
authRouter.post("/change-pass", changePassword);

export default authRouter;
