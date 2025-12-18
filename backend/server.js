import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js'; 
import userRoutes from './Routes/userRoutes.js'


const app = express();
app.use(express.json())
dotenv.config();
import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/userRoutes.js"; 

dotenv.config(); 

const app = express();
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.send("User CRUD API is running 🚀");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB();

app.get("/" , (req , res)=>{`server runing at port ${process.env.PORT}`})
app.use("api/users" , userRoutes);
const port = process.env.PORT || 5000

app.listen(port , ()=>{console.log("port is listening");})
