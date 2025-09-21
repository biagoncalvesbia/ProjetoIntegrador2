import { Router } from "express"
import { AllEntrepreneur, Delete, Register } from "../controllers/entrepreneur.controller.js"
import { authorize } from "../utils/authorize.js"

export const routerEnt = Router()

routerEnt.post("/register/:userId", Register, authorize('entrepreneur'))
routerEnt.delete("/delete/:id", Delete, authorize('entrepreneur'))
routerEnt.get("/all", AllEntrepreneur)