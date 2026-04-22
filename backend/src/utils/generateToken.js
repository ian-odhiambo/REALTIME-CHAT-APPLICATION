import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (user:id, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET)
}