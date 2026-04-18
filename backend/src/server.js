import express from "express";
import dotenv from "dotenv";
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    //root route http://localhost:5000
    res.send("hello world!!");
});

app.get("/api/v1/signupRoute", (req, res) =>{
    console.log("sign up Route");
});

app.get("/api/v1/loginRoute", (req, res) =>{
    console.log("Login Route");
});

app.get("/api/v1/logOutRoute", (req, res) =>{
    console.log("Log Out Route");
})

app.get

app.listen(PORT,() => console.log(`Server Running on port ${PORT}`));