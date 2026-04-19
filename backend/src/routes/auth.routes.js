import express from "express";
import {login, logOut, signUp} from "../controllers/auth.controller.js"
const router = express.router();

router.get("/signup", signUp);
router.get("/login", loginUser);
router.get("/logOut", loginOut);