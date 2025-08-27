import { Router } from "express"
import { Delete, Register } from "../controllers/entrepreneur.controller.js"

export const routerEnt = Router()

routerEnt.post("/register/:userId", Register)
routerEnt.delete("/delete/:id", Delete)