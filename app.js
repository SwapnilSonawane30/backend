import express from "express";
import {config} from "dotenv"
import userRouter from "./routes/user.js";
import taskRouter from "./routes/tasks.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
config({
    path:"./data/config.env",
})
export const app=express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))


app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)



app.get("/",(req,res)=>{
    res.send("noce")
})



app.use(errorMiddleware)



