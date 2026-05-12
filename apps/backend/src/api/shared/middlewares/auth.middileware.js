
import  verifyAccessToken from '../../../utils/jwt.js'
require('dotenv').config()
//const Jwt = require('jsonwebtoken');
//const { SECRET } = require("../../config");
const authenticate = (req,res,next)=>{
    
    let authHeader = req.headers.authorization; //get token form headers   
    if(!authHeader){
        return res.status(401).json({success:false,message:Unauthorized})
    }
    const token = token.split(' ')[1];
    try{
        const decoded =verifyAccessToken(token);
        req.user = decoded;
        next()
    }
    catch (error){
        return res.status(401).json({
        message: 'Invalid token'
        })
    }
}
export default authenticate;