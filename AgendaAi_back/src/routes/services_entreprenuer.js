import { Router } from "express";
import { GetAllServicesEntreprenuer, Register } from "../controllers/services_entreprenuer.controller.js";

export const routerServicesEntreprenuer = Router()

routerServicesEntreprenuer.post("/register/:id", Register)
routerServicesEntreprenuer.get("/getall/:id", GetAllServicesEntreprenuer)