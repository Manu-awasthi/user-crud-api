import express from 'express'
import dotenv from 'dotenv' 
import connectDB from './database/db.js';
import userRoutes from './Routes/userRoutes.js'

const app = express();
app.use(express.json())
dotenv.config();

connectDB();

app.get("/" , (req , res)=>{`server runing at port ${process.env.PORT}`})
app.use("api/users" , userRoutes);
const port = process.env.PORT || 5000

app.listen(port , ()=>{console.log("port is listening"))
