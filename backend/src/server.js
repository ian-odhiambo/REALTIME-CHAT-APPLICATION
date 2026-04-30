//package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/v1/auth.routes.js";
import messageRoutes from "./routes/v1/message.routes.js";
import userRoutes from "./routes/v1/user.route.js";

//database import 
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser());
// app.get("/", (req, res) => {
//   //root route http://localhost:5000
//   res.send("hello world!!");
// });

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
