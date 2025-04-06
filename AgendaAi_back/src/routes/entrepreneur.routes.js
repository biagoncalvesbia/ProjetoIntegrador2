import { Router } from "express"
import { Login, Register } from "../controllers/entrepreneur.controller.js"

export const routerEnt = Router()

routerEnt.post("/register", Register)
routerEnt.post("/login", Login)