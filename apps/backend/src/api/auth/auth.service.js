import pool from '../../config/db.js'

import {
  hashPassword,
  comparePassword
} from '../../utils/bycrypt.js'

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from '../../utils/jwt.js'

import {generateCsrfToken} from '../../utils/csrf.js'

export async function register(payload) {
  const existingUser = await pool.query(`SELECT id FROM users WHERE email = $1`,[payload.email])

  if (existingUser.rows.length) {
    throw new Error('Email already exists')
  }

  const password = await hashPassword(payload.password)

    // const otp = Math.floor(1000 + Math.random() * 9000);
    // const userid = uuidv4();
    // const hashedPass = await bcrypt.hash(password, 8);
  const result =
    await pool.query(`INSERT INTO users (
        fist_name,
        last_name,
        email,
        phone,
        password)
      VALUES ($1, $2, $3,$4,$5)
      RETURNING id, first_name, last_name,email, phone,role`,
      [
        payload.name,
        payload.email,
        password
      ]
    )

  return result.rows[0]
}

export async function login(payload) {
  const result =    await pool.query(`SELECT
      u.id,
      u.first_name,
      u.last_name,
      u.email,
      u.phone,
      u.role_id,
      u.password_hash,
      r.name AS role
    FROM users u
    LEFT JOIN roles r  ON u.role_id = r.id
    WHERE u.email = $1`,[payload.email])
  //const result = await pool.query(query,[id]);
  const user =   result.rows[0];
  if (!user) {
    throw new Error('Invalid credentials')
  }
  const validPassword =   await comparePassword(payload.password,user.password_hash)

  // if (validPassword) {
  //     if (two_step_verification === "true") {
  //       const new_otp = Math.floor(1000 + Math.random() * 9000);
  //       const query = "UPDATE users SET otp = $1 WHERE emailid = $2 RETURNING";
  //       const values = [new_otp, email];
  //       const result = await pool.query(query, values);
  //       res.status(200).json({
  //         message: "Login First step successful",
  //         second_step_verify: true,
  //       });
  //     } else {
  //       res
  //         .status(200)
  //         .json({ message: "Login successful", data: result.rows[0] });
  //     }
  //   } else {
  //     res.sendStatus(203);
  //   }

  if (!validPassword) {
    throw new Error(
      'Invalid credentials'
    )
  }
  
  return {
    user: {
      id: user.id,
      first_name: user.first_name,
      last_name:user.last_name,
      email: user.email,
      phone: user.phone,
      role: user.role
    },

    accessToken:generateAccessToken({
        id: user.id,
        role: user.role
      }),

    refreshToken:generateRefreshToken({
        id: user.id
      }),
    csrfToken:generateCsrfToken()
  }
}

export async function refreshtoken(rtoken) {
  if (!rtoken) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
      }

    const decoded = verifyRefreshToken(rtoken)
    return {
      newtoken:{
          accessToken:generateAccessToken({
          id: user.id,
          role: user.role
        }),
      }
    }
}