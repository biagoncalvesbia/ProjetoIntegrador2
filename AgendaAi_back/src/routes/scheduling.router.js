import { Router } from "express"
import { Register } from "../controllers/scheduling.controller.js"

export const routerSched = Router()

routerSched.post("/register", Register)