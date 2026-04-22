import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (user:d, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
}