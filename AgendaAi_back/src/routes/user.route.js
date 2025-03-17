import { Router } from "express"
import { Register } from "../controllers/user.controller.js"

export const router = Router()

router.post("/register", Register)