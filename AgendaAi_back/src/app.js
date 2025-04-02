import express from 'express';
import {router} from "./routes/user.route.js";
import {routerEnt} from "./routes/entrepreneur.routes.js";
import { routerEnt } from './routes/scheduling.router.js';
import dotenv from 'dotenv/config.js'
export const app = express();

app.use(express.json());
app.use("/user", router);
app.use("/entrepreneur", routerEnt);
app.use("/scheduling", routerEnt);
