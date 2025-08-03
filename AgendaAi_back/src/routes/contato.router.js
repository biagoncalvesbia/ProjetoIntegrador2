import { Router } from "express";
import { Register } from '../controllers/contato.controller.js'


export const routerCont = Router()

routerCont.post("/register", Register)