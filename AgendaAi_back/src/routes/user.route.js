import { Router } from "express"
import { GetUserById, Login, Register, requestPasswordReset, resetPassword, GetAllUsers } from "../controllers/user.controller.js"

export const router = Router()

router.post("/register", Register)
router.post("/login", Login)
router.get("/get/:id", GetUserById)
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/resetpassword', resetPassword);
router.get('/all', GetAllUsers);