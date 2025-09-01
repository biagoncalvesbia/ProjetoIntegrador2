import { Router } from "express"
import { Delete, Register } from "../controllers/entrepreneur.controller.js"
import { authorize } from "../utils/authorize.js"

export const routerEnt = Router()

routerEnt.post("/register/:userId", Register, authorize('entrepreneur'))
routerEnt.delete("/delete/:id", Delete, authorize('entrepreneur'))