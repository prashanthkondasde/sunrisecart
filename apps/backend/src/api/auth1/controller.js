const { json } = require("body-parser");
const pool = require("../../config/db");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  console.log(req.body);
  const { email, first_name, last_name, password } = req.body;
  try {
    const query = "SELECT emailid FROM users WHERE emailid=$1";
    const result = await pool.query(query, [email]);
    if (result.rowCount > 0) {
      console.log("user exists");

      res.status(201).json({ message: "Email Already Registered" });
    } else {
      console.log("user not exists");
      const otp = Math.floor(1000 + Math.random() * 9000);
      const userid = uuidv4();
      const hashedPass = await bcrypt.hash(password, 8);
      const query =
        "INSERT INTO users(userid, firstname, emailid, lastname, password, otp) VALUES($1, $2,$3,$4,$5, $6) RETURNING *";
      const values = [userid, first_name, email, last_name, hashedPass, otp];
      const result = await pool.query(query, values);
      console.log("registered");
      res
        .status(200)
        .json({ message: "Registration successfull", data: result.rows[0] });
    }
  } catch (error) {
    console.log("error while signup", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

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

const login = async (req, res) => {
  console.log("log",req.body);
  const { email, password } = req.body;
  try {
    const query = `SELECT userid, roleid_roles,emailid, password, firstname, lastname, onboarding_completed FROM users WHERE emailid = $1`;
    const result = await pool.query(query, [email]);
    const user_password = result.rows[0].password;
    const two_step_verification = result.rows[0].enable_two_step_verify;

    let isPasswordMatch = await bcrypt.compare(password, user_password);
    if (isPasswordMatch) {
      if (two_step_verification === "true") {
        const new_otp = Math.floor(1000 + Math.random() * 9000);
        const query = "UPDATE users SET otp = $1 WHERE emailid = $2 RETURNING";
        const values = [new_otp, email];
        const result = await pool.query(query, values);
        res.status(200).json({
          message: "Login First step successful",
          second_step_verify: true,
        });
      } else {
        res
          .status(200)
          .json({ message: "Login successful", data: result.rows[0] });
      }
    } else {
      res.sendStatus(203);
    }
  } catch (error) {
    console.log("Error while fetching user password", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
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

const addAlerts = async (req, res) => {
  console.log(req.body);
  const { sms_notifications, push_notifications, email_notifications, email } =
    req.body;
  try {
    const query = `UPDATE users SET email_alert_switch = $1, push_notification_switch = $2,
     sms_switch = $3
     WHERE emailid = $4`;
    const result = await pool.query(query, [
      sms_notifications,
      push_notifications,
      email_notifications,
      email,
    ]);
    res
      .status(200)
      .json({ message: "Alerts updated successfully", success: true });
  } catch (error) {
    console.log("error while updating Alerts", error);
    res
      .status(203)
      .json({ message: "Updating Alerts unsuccessfull", success: false });
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

module.exports = {
  signup,
  login,
  googleSignin,
  verifyOtp,
  resetPassword,
  changePassword,
  addAlerts,
  updateUserProfile,
  getUserProfile,
  activityLogs,
};
