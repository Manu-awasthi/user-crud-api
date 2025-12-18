import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("User CRUD API is running 🚀");
});

app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
