import { Router } from "express"
import { GetUserById, Login, Register } from "../controllers/user.controller.js"

export const router = Router()

router.post("/register", Register)
router.post("/login", Login)
router.get("/get/:id", GetUserById)