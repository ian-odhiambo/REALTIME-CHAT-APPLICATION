import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/v1/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse incoming requests:req.body

app.get("/", (req, res) => {
  //root route http://localhost:5000
  res.send("hello world!!");
});

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
