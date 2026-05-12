import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials'
    })
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  )

  if (!valid) {
    return res.status(401).json({
      message: 'Invalid credentials'
    })
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  )

  res.cookie('access_token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  })

  res.json({
    user
  })
}

export const logout = async (req, res) => {
  res.clearCookie('access_token')

  res.json({
    success: true
  })
}
