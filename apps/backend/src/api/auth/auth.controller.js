import pool from '../../config/env.js'
import path from 'path' 
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt'
import * as authService from './auth.service.js'
const isProduction = process.env.NODE_ENV === 'production'

const register = async (req, res) => {
  console.log(req.body);
  const { email, first_name, last_name, password } = req.body;
  try {
    const user = await authService.register(req.body);
    res.status(201).json({
        success: true,
        user
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
     const data = await authService.login(req.body)
      res.cookie('access_token',data.accessToken,
      {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
      })

    res.cookie('refresh_token',data.refreshToken,
      {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
      })
    res.cookie('csrf_token',data.csrfToken,
      {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'none' : 'lax',
        
      })
     res.json({success: true,csrfToken:data.csrfToken,accessToken:data.accessToken,user: data.user})
  } catch (error) {
    console.log("Error while fetching user password", error);
    res.status(401).json({ success: false, message: error.message });
  }
};
const logout = async(req,res)=>{
  res.clearCookie('refresh_token');
  res.clearCookie('csrf_token');
  return res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  })
}
const refreshAccessToken = async (req,res)=>{
  // console.log("rtoken",req.cookies.refresh_token);
  try {
    const data = await authService.refreshtoken(req.cookies.refresh_token);
    // console.log("refreshdata",data);
    res.json({success: true,csrfToken:data.csrfToken,accessToken:data.accessToken,user: data.user})
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error.message //Invalid refresh token
      })
    }
}
const googleSignin = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const query = "SELECT emailid FROM user WHERE emailid=$1";
    const result = await pool.query(query, email);
    if (result.rowCount > 0) {
    } else {
    }
  } catch (error) {
    console.log("error while google signin");
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyOtp = async (req, res) => {
  console.log("otp verify", req.body);
  const { otp, email } = req.body;
  try {
    const query =
      "SELECT otp, firstname, lastname, userid, onboarding_completed emailid FROM USERS WHERE emailid = $1";
    const result = await pool.query(query, [email]);
    console.log(result.rows[0].otp);
    if (result.rows[0].otp === otp) {
      res
        .status(200)
        .json({
          message: "Otp verified successfully",
          success: true,
          data: result.rows[0],
        });
    } else {
      res.status(200).json({ message: "Incorrect otp", success: false });
    }
  } catch (error) {
    console.log("error while otp verification", error);
  }
};

const getUserProfile = async (req, res) => {
  const { userid } = req.body;
  try {
    const query = "SELECT * FROM USERS WHERE userid = $1";
    const result = await pool.query(query, [userid]);
    // console.log("User ",result.rows[0]);
    res
      .status(200)
      .json({ message: "Profile fetched successfully", data: result.rows[0] });
  } catch (error) {
    console.log("error while fetching profile details", error);
  }
};

const updateUserProfile = async (req, res) => {
  console.log(req.body);
  const {
    first_name,
    last_name,
    phone,
    email,
    user_street,
    user_unitno,
    user_houseno,
    user_suburb,
    user_pincode,
    user_city,
    user_country,
    userid,
  } = req.body;
  try {
    const query = `UPDATE users SET firstname = $1, 
    lastname = $2, mobileno = $3, emailid = $4, addressline_one = $5,
    unit_no = $6, house_no = $7, suburb = $8, postcode = $9, city = $10, country = $11
    WHERE userid = $12`;
    const values = [
      first_name,
      last_name,
      phone,
      email,
      user_street,
      user_unitno,
      user_houseno,
      user_suburb,
      user_pincode,
      user_city,
      user_country,
      userid,
    ];
    const result = await pool.query(query, values);
    res
      .status(200)
      .json({ message: "Profile update successful", success: true });
  } catch (error) {
    console.log("error while updating Profile", error);
  }
};

const resetPassword = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 8);
  try {
    const query = "UPDATE users SET password = $1 WHERE emailid = $2";
    const result = await pool.query(query, [hashedPass, email]);
    res
      .status(200)
      .json({ message: "Password reset successfully", success: true });
  } catch (error) {
    console.log("error while updating password", error);
  }
};

const changePassword = async (req, res) => {
  console.log(req.body);
  const {
    enable_two_step_verification,
    current_pwd,
    new_pwd,
    confirm_new_pwd,
    email,
  } = req.body;
  let old_password;
  try {
    const query = `SELECT password FROM users WHERE emailid = $1`;
    const result = await pool.query(query, [email]);
    old_password = result.rows[0].password;
  } catch (error) {
    console.log("Error while fetching user password", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }

  let isPasswordMatch = await bcrypt.compare(current_pwd, old_password);
  console.log("Password matched: ", isPasswordMatch);

  if (isPasswordMatch) {
    const hashedNewPass = await bcrypt.hash(new_pwd, 8);
    try {
      const query =
        "UPDATE users SET password = $1, enable_two_step_verify = $2 WHERE emailid = $3";
      const result = await pool.query(query, [
        hashedNewPass,
        enable_two_step_verification,
        email,
      ]);
      res
        .status(200)
        .json({ message: "Password reset successful", success: true });
    } catch (error) {
      console.log("error while updating password", error);
    }
  } else {
    res
      .status(203)
      .json({ message: "Password reset unsuccessful", success: false });
  }
};


const activityLogs = async (req, res) => {
  console.log("active", req.body);
  const { userid } = req.body;
  try {
    const query = `
    SELECT a.id,
    a.activityinfo,
    a.action_type,
    a.created_at,
    a.modulename,
    a.entry_date,
    u.emailid
    FROM activitylog a
     INNER JOIN users u ON a.userid_users = u.userid 
     WHERE userid_users = $1
     ORDER BY a.created_at DESC
    `;
    const result = await pool.query(query, [userid]);
    console.log(result.rows);
    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.log("error while fetching user activities", error);
  }
};

export {
  register,
  login,
  refreshAccessToken,
  googleSignin,
  verifyOtp,
  resetPassword,
  changePassword,
  updateUserProfile,
  getUserProfile,
  activityLogs,
  logout
};
