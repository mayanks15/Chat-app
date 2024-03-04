import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth_routes.js";
import messageRoutes from "./routes/message_routes.js"
import userRoutes from "./routes/user_routes.js"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000

// app.get("/" , (req,res)=>{
//     res.send("HELLO ")
// })

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/messages",messageRoutes);

//DATABASE CONNECTION
const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI,{ autoIndex: true });
        console.log("-----Database Connected-----")
    } catch (error) {
        console.log("Error connecting to database. ",error.message)
    }
}

// STARTING OF APP
app.listen(PORT, ()=> {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});

