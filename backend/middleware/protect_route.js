import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const protectRoute = async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token){
        res.status(400).json({error: "Unauthorized - No token provided"});
    }

    const decode =  jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
        res.status(400).json({error: "Unauthorized - Invalid token"})
    }
    
    const user= await User.findById(decode.userId).select("-password");

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    req.user=user;
    next();
}

export default protectRoute;