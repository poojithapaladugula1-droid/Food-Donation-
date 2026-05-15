import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/ConnectDB.js";
import morgan from "morgan";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Food Donation API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});