import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect";

dotenv.config();
connectDB();

const app: Application = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
