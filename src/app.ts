import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect";
import cors from "cors";
import { StudentRoutes } from "./modules/student/student.route";

dotenv.config();
connectDB();

const app: Application = express();
app.use(express.json());
app.use(cors());

// application students routes
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
