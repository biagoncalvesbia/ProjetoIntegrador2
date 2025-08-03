import express from 'express';
import {router} from "./routes/user.route.js";
import {routerEnt} from "./routes/entrepreneur.routes.js";
import dotenv from 'dotenv/config.js'
import { routerSched } from './routes/scheduling.router.js';
import { routerCont } from './routes/contato.router.js';
import cors from 'cors'
export const app = express();
app.use(cors())
app.use(express.json());
app.use("/user", router);
app.use("/entrepreneur", routerEnt);
app.use("/scheduling", routerSched);
app.use("/contato", routerCont);

