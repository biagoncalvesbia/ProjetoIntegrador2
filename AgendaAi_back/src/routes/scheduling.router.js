import { Router } from "express"
import { Register } from "../controllers/scheduling.controller.js"
import auth from "../utils/auth.js"
import { authorize } from "../utils/authorize.js"

export const routerSched = Router()

routerSched.post("/register", auth,  Register, authorize('user'))