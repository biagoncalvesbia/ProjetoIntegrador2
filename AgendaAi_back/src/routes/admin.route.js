import { Router } from "express"
import { GetAll } from "../controllers/admin.controller.js"

export const routerAdmin = Router()

routerAdmin.get('/allentrepreneursregister', GetAll)