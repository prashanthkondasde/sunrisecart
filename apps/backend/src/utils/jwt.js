import jwt from 'jsonwebtoken'

import env  from '../config/env.js'
console.log(env.JWT_SECRET);
export function generateAccessToken(payload) {
  return jwt.sign(payload,env.JWT_SECRET,{expiresIn: env.JWT_SECRET_TIME})
}

export function generateRefreshToken(payload) {
  return jwt.sign(payload,env.JWT_REFRESH_SECRET,{expiresIn: env.JWT_REFRESH_SECRET_TIME})
}

export function verifyAccessToken(token) {
  return jwt.verify(token,env.JWT_SECRET)
}

export function verifyRefreshToken(token) {
  return jwt.verify(token,env.JWT_REFRESH_SECRET)
}
