import express from 'express';
import {router} from "./routes/user.route.js";
import dotenv from 'dotenv/config.js'
export const app = express();

app.use(express.json());
app.use("/user", router);

