import { Router } from "express"
import { Register } from "../controllers/entrepreneur.controller.js"

export const routerEnt = Router()

routerEnt.post("/register/:userId", Register)