import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = (req, res, next) => {
    try{
        const tokens = req.cookies.jwt;
        if(!token) {
            return res.status(401).json({error: "Unauthorised-no Token Provider"});
        }
 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findbyId(decoded.userId); 

        if(!decoded) {
            return res.status(401).json({error: "Unauthorised-invalid token"});
        }
    }catch(error){
        console.log("Error in protectRoute middleware:", error.mesage)
        res.status(500).json({error:"Internal server error"});
    }
}