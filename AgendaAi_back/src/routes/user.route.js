import { Router } from "express"
import { 
  GetUserById, 
  Login, 
  Register, 
  requestPasswordReset, 
  resetPassword, 
  GetAllUsers 
} from "../controllers/user.controller.js"

export const router = Router()

// AUTH
router.post("/register", Register)
router.post("/login", Login)

// USERS
router.get("/all", GetAllUsers)
router.get("/get/:id", GetUserById)   // Se seu front usa isso, mantenha assim!

// PASSWORD RESET
router.post("/request-password-reset", requestPasswordReset)
router.post("/reset-password", resetPassword)
