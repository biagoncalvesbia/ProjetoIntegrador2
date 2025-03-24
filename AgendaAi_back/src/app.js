import express from 'express';
import userRouter from "./routes/user.route.js";
import entrepreneurRouter  from "./routes/entrepreneur.routes.js";
import dotenv from 'dotenv/config.js'
export const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/entrepreneurs", entrepreneurRouter);



