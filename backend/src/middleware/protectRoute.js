import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
    try{
        const tokens = req.cookies.jwt;
    }catch(error){
        console.log("Error in protectRoute middleware:", error.mesage)
        res.status(500).json({error:"Internal server error"});
    }
}