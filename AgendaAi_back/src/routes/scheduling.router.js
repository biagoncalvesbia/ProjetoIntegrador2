import { Router } from "express"
import { Register } from "../controllers/scheduling.controller.js"
import auth from "../utils/auth.js"

export const routerSched = Router()

routerSched.post("/register", auth,  Register)